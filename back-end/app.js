// DEPENDENCIES
const cors = require("cors");
const express = require("express");
// const db = require("./db/dbConfig.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("<h1>Buy Sara</h1>");
});

// app.get("/test", async (req, res) => {
//   try {
//     const allProducts = await db.any("SELECT * FROM test");
//     res.json(allProducts);
//   } catch (err) {
//     res.json(err);
//   }
// });

// app.get("/hello/:firstName/:lastName", (req, res) => {
//   // console.log(req.params);
//   const { firstName, lastName } = req.params;
//   res.send(`hello ${firstName}`);
// });

// EXPORT
module.exports = app;

// /////////////////////////////////////
// // REMOVE AFTER SUCCESSFUL DEPLOYMENT
// /////////////////////////////////////

// /////////////////////////////////////
// // REMOVE AFTER SUCCESSFUL DEPLOYMENT
// /////////////////////////////////////
