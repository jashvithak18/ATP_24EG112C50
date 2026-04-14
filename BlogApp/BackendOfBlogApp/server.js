import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { userApp } from './APIs/UserAPI.js';
import { authorApp } from './APIs/AuthorAPI.js';
import { adminApp } from './APIs/AdminAPI.js';
import { commonApp } from './APIs/CommonAPI.js';
import cookieParser from 'cookie-parser';
import cors from "cors"

config();
const app = exp()

//Middleware FIRST
app.use(cors({
  origin: "https://blogapp-atp-capstone-24eg112c38.vercel.app",
  credentials: true,
}));
app.use(exp.json());
app.use(cookieParser());

//  Routes AFTER middleware
app.use('/user-api', userApp);
app.use('/author-api', authorApp);
app.use('/admin-api', adminApp);
app.use('/auth', commonApp);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: `path ${req.url} is invalid` })
})

// Error handler
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;
  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({ message: "error occurred", error: `${field} "${value}" already exists` });
  }
  res.status(500).json({ message: "error occurred", error: "Server side error" });
});

// ✅ DB Connection and server start at the END
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("connected to database");
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`server started on port ${port}`))
  } catch (err) {
    console.log("error in db connection", err);
  }
}

connectDB();