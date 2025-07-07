import dotenv from "dotenv";
// import mongoose from "mongoose";
// import express from "express";
// import { DB_NAME } from "./constants.js";
// import connectDB from "./db/db-two.js"
import connectDB from "./db/db.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});


//connectDB return a promise 
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Mongo DB server is not working", error);
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at Port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAILED !!!!!!!", error);
  });



// remember about path:"./.env" file

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("server error", error);
//
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
