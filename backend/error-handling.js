// Catch unhandled requests and forward to error handler.
const isProduction = require("./config").environment === "production";
const { ValidationError } = require("sequelize");

const requestNotFound = (_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
};

// Process sequelize errors
const validationError = (err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
};

// Error formatter
const formatErrors = (err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
};

module.exports = {
  requestNotFound,
  validationError,
  formatErrors,
};
