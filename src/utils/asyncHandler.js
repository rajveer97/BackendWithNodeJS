const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise
    .resolve(requestHandler(req, res, next))
    .catch((err) => next(err))
  }
}

export {asyncHandler}

// Just for testing
// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () => {}


// Try catch block to handle any exceptions

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }