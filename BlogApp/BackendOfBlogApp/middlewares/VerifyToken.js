import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const { verify } = jwt;

export const verifyToken = (...allowedRoles) => {
  return (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: "please login" });
    }
    try {
      const decodedToken = verify(token, process.env.KEY); // ensure .env has KEY
      if (!allowedRoles.includes(decodedToken.role)) {
        return res.status(403).json({ message: "you are not authorized" });
      }
      req.user = decodedToken;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Session expired : Re-Login" });
    }
  };
};