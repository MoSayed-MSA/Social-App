import mongoose from "mongoose";
import dotenv from "dotenv";
import { env } from "../config/env.js";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(env.db.uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};