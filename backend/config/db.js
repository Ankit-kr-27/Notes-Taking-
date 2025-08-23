import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected!");

  } catch (error) {
    console.log("Error while connecting to Mongodb",error);
    process.exit(1);
  }
};