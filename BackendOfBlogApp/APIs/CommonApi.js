import exp from "express";
import { UserModel } from "../Models/UserModel.js";
import { hash, compare } from "bcryptjs";
//import {config} from 'dotenv'
import {verifyToken} from '../middlewares/VerifyToken.js'
import jwt from "jsonwebtoken";
const { sign } = jwt;
//config()
export const commonApp = exp.Router();

//route for register
commonApp.post("/users", async (req, res) => {
  let allowedRoles = ["USER", "AUTHOR"];
  //get user from request
  const newUser = req.body;
  //check if role is permitted(user or author)
  if (!allowedRoles.includes(newUser.role)) {
    return res.status(400).json({ message: "Invalid role" });
  }
  //run validators manually
  
  //hash passsword and replace plain password with hashed obne
  newUser.password = await hash(newUser.password, 12);
  //create new user document
  const newUserDoc = new UserModel(newUser);
  //save user
  await newUserDoc.save();
  //send res
  res.status(201).json({ message: "User registered successfully" });
});

//route for login(user,author,admin)
commonApp.post("/login", async (req, res) => {
  //get user cred obj
  const { email, password } = req.body;
  //find user by email
  const user = await UserModel.findOne({ email: email });
  //if user not found
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }
  //compare passwords
  const isMatched = await compare(password, user.password);
  //if passwords not matched
  if (!isMatched) {
    return res.status(400).json({ message: "Invalid password" });
  }
  //if passwords are matched
  //create token (jsonwebtoken-jwt-jaat)
  const signedToken = sign(
    { id:user._id,email: user.email, role: user.role },
    process.env.SECRET_KEY,
    { expiresIn: "1h" },
  );
  //set token to res header as httpOnly cookie
  res.cookie("token", signedToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  //remove password from user document
  let userObj = user.toObject();
  delete userObj.password;
  //send res
  res.status(200).json({ message: "Login successful", payload: userObj });
});

//route for logout
commonApp.get("/logout", async (req, res) => {
    res.clearCookie("token",{
      httpOnly:true,
      sameSite:"lax",
      secure:false
    })
    res.status(200).json({ message: "Logged out" })
})

//change password
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
//check current password and new password are same
const {currentPassword,newPassword}=req.body

//get current password of user/author/admin

//check the current password of req and user are not same
//hash new password
//hash passsword and replace plain password with hashed one
//replace current password with hashed new password 
//save
//send res

})