import mongoose from "mongoose";
import express, { application } from "express";
import cors from "cors";
import passport from "passport";
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
