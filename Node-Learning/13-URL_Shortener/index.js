const express = require("express");
const cookieParser = require("cookie-parser");
const {restrictToLogin} =require("./Middleware/auth")
const path = require("path");
const urlRoute = require("./routes/url.router");
const { connectMongoDB } = require("./connect");
const UserRoute=require("./routes/user.router")
const app = express();
const PORT = 8000;
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", restrictToLogin,urlRoute);
app.use("/user", UserRoute);


connectMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
