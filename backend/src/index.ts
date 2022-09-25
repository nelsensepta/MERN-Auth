import mongoose from "mongoose";
import express, { Request, Response } from "express";
import cors from "cors";
import passport, { use } from "passport";
import passportLocal from "passport-local";
import cookieParser from "express-session";
import bcrypt from "bcryptjs";
import session from "express-session";
import dotent from "dotenv";

mongoose.connect(
  "server",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: Error) => {
    if (err) throw err;
    console.log("Connected To Mongo");
  }
);

// middleware
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(session:({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true,
}))

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session);

// Routes
app.post("/register", async (req: Request,res: Response) =>{
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    username:req.body.username,
    password: 
  })
})
