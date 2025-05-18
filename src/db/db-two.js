import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     console.log(`DataBase Connected testing file :: DB host ${connectionInstance.connection.host}`)
  } catch (error) {
    console.error("Server error", error)
    process.exit(1)
  }
}

export default connectDB