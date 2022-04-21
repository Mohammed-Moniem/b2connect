const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const trimReqBody = require("trim-request-body");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const crypto = require("./routes/cryptoAndFiat");
const movies = require("./routes/movies");

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(express.json({ limit: "50mb" }));
app.use(express.text({ limit: "50mb" }));

app.use(trimReqBody);

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10000,
});

app.use(limiter);

app.use("/api/v1/health", (req, res) => {
  res.status(200).json({ success: true });
});
app.use("/api/v1/crypto", crypto);
app.use("/api/v1/movies", movies);
app.use(errorHandler);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${
      process.env.NODE_ENV ? process.env.NODE_ENV : "development"
    } mode on port ${PORT}`.yellow.bold
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  server.close(() => process.exit(1));
});
