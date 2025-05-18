import dotenv from "dotenv"
// import mongoose from "mongoose";
// import express from "express";
// import { DB_NAME } from "./constants.js";
// import connectDB from "./db/db-two.js"
import connectDB from "./db/db.js";
dotenv.config({
    path:"./.env"
})

connectDB()
// remember about path:"./.env" file

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("server error", error);
//       4;
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error in index.js in src", error);
//   process.exit(1)
    
//   }
// })();
