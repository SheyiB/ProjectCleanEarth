const express = require("express");
const db = require("./config/db");
const dotenv = require("dotenv");
const payment = require("./routes/payment.routes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config({ path: "./config/config.env" });

db();

// routes
app.use("/api/projectCleanEarth/pay", payment);

// Body parser
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server starting on port: ${port}`);
});
