require("dotenv").config();

const express = require("express");
const app = express();

const user = require("./routes/user.route");
const PORT = process.env.PORT;

// Built-in Middleware
//Client se aane wale JSON data ko JavaScript Object me convert karta hai.
app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
  console.log("Hello from first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Hello from second middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Hello from third middleware");
  next();
});
// Named Custom Middleware
const customMiddleware = (req, res, next) => {
  console.log("Custom Middleware Executed");
  next();
};
app.use(customMiddleware);

// Routes
app.use("/user", user);

// Home Route
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
