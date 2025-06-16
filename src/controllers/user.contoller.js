import { asyncHandler } from "../utils/asyncHandler.js";

// const registerUser = asyncHandler(async (req, res) => {
//   res.status(200).json({
//     message: "small success",
//   });
// });

// export { registerUser };

const registerUser = asyncHandler(async (req, res) => {
res.status(200).json({
  message:"cool robo go robo go "
})
})

export {
  registerUser
}