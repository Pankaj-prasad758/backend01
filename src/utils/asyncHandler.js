const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

// export const asyncHandle = (asyncfunction) => {
//   (req, res, next) => {
//    Promise.resolve(asyncfunction(req, res, next)).catch((error) => {
//     next(error)
//    })
//   }
// }

export { asyncHandler }
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 502).json({
//             success: false,
//             message:error.message
//         })
//     }
// }

// const asyncHandlerTest = (fn) => async (req, res, next) => {
//    try {
//     await fn(req, res, next)
//    } catch (error) {
//     res.status(error.code || 402).json({
//       success: false,
//       message: error.message
//     })
//    }
// } 