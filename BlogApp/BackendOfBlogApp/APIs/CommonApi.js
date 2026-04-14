import exp from 'express';
import { UserModel } from '../models/UserModel.js';
import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { upload } from '../config/multer.js';
import { uploadToCloudinary } from '../config/cloudinaryUpload.js';
import cloudinary from '../config/cloudinary.js';

export const commonApp = exp.Router();
const { sign } = jwt;

// Route to register
commonApp.post('/users', upload.single("profileImageUrl"), async (req, res, next) => {
  let cloudinaryResult;

  try {
    const newUser = req.body;

    // allowed roles
    const allowedRoles = ['USER', 'AUTHOR'];
    if (!allowedRoles.includes(newUser.role)) {
      return res.status(400).json({ message: "invalid role" });
    }

    // upload image to cloudinary
    if (req.file) {
      try {
        cloudinaryResult = await uploadToCloudinary(req.file.buffer);
        newUser.profileImageUrl = cloudinaryResult?.secure_url;
      } catch (err) {
        newUser.profileImageUrl = "";
      }
    } else {
      newUser.profileImageUrl = "";
    }

    // hash password
    newUser.password = await hash(newUser.password, 12);

    // create and save user
    const userDocument = new UserModel(newUser);
    await userDocument.save();

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    // delete uploaded image if error occurs
    if (cloudinaryResult?.public_id) {
      await cloudinary.uploader.destroy(cloudinaryResult.public_id);
    }
    next(err);
  }
});

// route for login
commonApp.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const isMatched = await compare(password, user.password);
  if (!isMatched) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  // create token
  const signedToken = sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImageUrl: user.profileImageUrl
    },
    process.env.KEY,   // ensure .env has KEY
    { expiresIn: "1h" }
  );

  // set token in cookie
  res.cookie("token", signedToken, {
    httpOnly: true,
    sameSite: "none",
    secure: true
  });

  const userObj = user.toObject();
  delete userObj.password;

  res.status(200).json({ message: "Login Successful", payload: userObj });
});

// route for logout
commonApp.get('/logout', (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: true
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// check authentication
commonApp.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), (req, res) => {
  res.status(200).json({
    message: "authenticated",
    payload: req.user,
  });
});

// change password
commonApp.put('/password', verifyToken("ADMIN", "AUTHOR", "USER"), async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (currentPassword === newPassword) {
    return res.status(400).json({ message: "Current and new passwords should not be the same" });
  }

  const userId = req.user?.id;
  const user = await UserModel.findById(userId);

  const isMatched = await compare(currentPassword, user.password);
  if (!isMatched) {
    return res.status(400).json({ message: "Current password is not matching" });
  }

  const hashedPassword = await hash(newPassword, 12);
  user.password = hashedPassword;
  await user.save();   // fixed missing await

  res.status(200).json({ message: "Password updated" });
});