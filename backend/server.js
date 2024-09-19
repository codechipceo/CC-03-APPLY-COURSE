import { config } from "dotenv";
import mongoose from "mongoose";
config();
import { app } from "./app.js";
import { Locations } from "./src/Schemas/Location.js";
import { notFound, errorHandler } from "./src/middleware/errorMiddleware.js";
// Shut down server if Uncaught Exception occurs

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception, Shutting down server");
  process.exit(1);
});

export const activeEnviroment = process.env.NODE_ENV;
const activeDbString = {
  local: process.env.MONGODB_LOCAL,
  test: process.env.MONGODB_TEST,
  prod: process.env.MONGODB_PROD,
};

const URI = activeDbString[activeEnviroment];

console.log(URI)
URI &&
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      console.log("Mongo Db Connected", URI);
    })
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

// start server
const server = app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

// Shut down server if unhandled rejection occurs
process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log(err.name, err.message);
  console.log("Unhandled Rejection, Shutting Down");
  server.close(() => {
    process.exit(1);
  });
});
