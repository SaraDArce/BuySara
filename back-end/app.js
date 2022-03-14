// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const productController = require("./controllers/productController.js");
// const reviewsController = require("./controllers/reviewsController.js");

// const db = require("./db/dbConfig.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
require("dotenv").config();
// app.use("/reviews", reviewsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Buy Sara</h1>");
});

app.use("/products", productController);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

// app.get("/hello/:firstName/:lastName", (req, res) => {
//   // console.log(req.params);
//   const { firstName, lastName } = req.params;
//   res.send(`hello ${firstName}`);
// });

// EXPORT
module.exports = app;
