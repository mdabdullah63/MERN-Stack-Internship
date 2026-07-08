const express = require("express");
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user.routs");
const logReqRes = require("./middleware");

const app = express();
const PORT = 8000;

// Connect MongoDB
connectMongoDB("mongodb://127.0.0.1:27017/UserBD-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logger Middleware
app.use(logReqRes("log.txt"));

// Routes
app.use("/user", userRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server Start at PORT: ${PORT}`);
});
