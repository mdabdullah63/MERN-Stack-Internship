// Load .env file
require("dotenv").config();

// Import Express
const express = require("express");
const app = express();

// Import Routes
const object = require("../src/routes/object.routs");
const user = require("../src/routes/user.routs");
const basic = require("../src/routes/basic.routs");

// Read PORT from .env
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/user", user);
app.use("/basic", basic);
app.use("/object", object);

// Home Route (optional, env check karne ke liye)
app.get("/", (req, res) => {
  return res.json({
    appName: process.env.APP_NAME,
    author: process.env.AUTHOR,
    port: process.env.PORT,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
