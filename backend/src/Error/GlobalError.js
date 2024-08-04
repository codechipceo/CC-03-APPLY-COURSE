import { activeEnviroment } from "../../server.js";
import { CustomError } from "./CustomError.js";

const developmentError = (error, res) => {
  return res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    stackTrace: error.stack,
    error: error,
  });
};

const productionError = (err, res) => {
  if (err.isOperational) {
    return res
      .status(err.statusCode)
      .json({ status: err.status, msg: err.message });
  }

  return res.status(500).json({
    status: "Error",
    msg: "Something went wrong! Please try again later.",
  });
};

const castErrorHandler = (err) => {
  const msg = `Invalid value for ${err.path}: ${err.value}!`;
  return new CustomError(400, msg);
};

const duplicateKeyErrorHandler = (err) => {
  const name = err.keyValue.name;
  const msg = `There is already a movie with name ${name}. Please use another name!`;

  return new CustomError(400, msg);
};

const validationErrorHandler = (err) => {
  const errors = Object.values(err.errors).map((val) => val.message);
  const errorMessages = errors.join(". ");
  const msg = `Invalid input data: ${errorMessages}`;

  return new CustomError(400, msg);
};

export const GlobalErrorHandler = (error, req, res, next) => {
  error.statusCode = error.statusCode ?? 500;
  error.status = error.status ?? "Error";
  if (activeEnviroment === "local" || activeEnviroment === "test") {
    developmentError(error, res);
  } else if (activeEnviroment === "prod") {
    if (error.name === "CastError") error = castErrorHandler(error);
    if (error.code === 11000) error = duplicateKeyErrorHandler(error);
    if (error.name === "ValidationError") error = validationErrorHandler(error);
    productionError(error, res);
  }
};
