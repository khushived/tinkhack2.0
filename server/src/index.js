const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const port = process.env.PORT || 8000;

const router = require("./routes");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.get("/", (req, res) => {
  return res.send("Delivery Server");
});

app.get("/health", (req, res) => {
  const healthcheck = {
    resource: "Delivery Server",
    uptime: process.uptime(),
    responseTime: process.hrtime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
