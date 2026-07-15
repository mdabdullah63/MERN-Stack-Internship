const express = require("express");
const app = express();
const PORT = 8001;
const { connectMongoDB } = require("./contect");
const userRoute= require('./router/user.router')
connectMongoDB("mongodb://127.0.0.1:27017/large-userBD")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));
app.use("/",userRoute)
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
