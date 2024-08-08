import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { indexRouter } from "./src/Modules/indexRouter.js";
import { GlobalErrorHandler } from "./src/Error/GlobalError.js";
import fileUploadMiddleware from "express-fileupload";
const app = express();

// initialise required modules
app.use(cors({ origin: "*" }));
app.use(fileUploadMiddleware());
app.use(express.json());
app.use(cookieParser());

// to manage routes of ADMIN_PANEL and WEBSITE seperately
app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes
app.use("/api", indexRouter);

// Global error handler
app.use(GlobalErrorHandler);

// to manage incorrect routes
app.use("*", (req, res) => {
  return res
    .status(404)
    .json({ msg: `Requested Route ${req.originalUrl} does not exist ` });
});

export { app };
