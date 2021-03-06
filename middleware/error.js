const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  console.log(
    `name: ${err.name}, statusCode: ${err.statusCode}, message: ${err.message}, model: ${err.model}`
      .red
  );
  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Internal Server Error" });
};
module.exports = errorHandler;
