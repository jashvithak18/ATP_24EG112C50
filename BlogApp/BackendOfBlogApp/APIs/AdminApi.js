import exp from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { ArticleModel } from '../models/ArticleModel.js';
import { UserModel } from '../models/UserModel.js';

export const adminApp = exp.Router();

// ROUTE TO READ ALL users
adminApp.get('/users', verifyToken("ADMIN"), async (req, res) => {
  const usersList = await UserModel.find({});
  if (usersList.length === 0) {
    return res.status(404).json({ message: "Users not found" });
  }
  res.status(200).json({ message: "All users", payload: usersList });
});

// Block or activate the users
adminApp.patch('/users', verifyToken("ADMIN"), async (req, res) => {
  const { userId, isUserActive } = req.body;

  const user = await UserModel.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User/Author not found" });
  }

  user.isUserActive = isUserActive;
  await user.save();

  if (!isUserActive) {
    return res.status(200).json({ message: "Blocked the user" });
  }
  res.status(200).json({ message: "Activated the user" });
});