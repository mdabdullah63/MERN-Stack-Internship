const express=require("express")
const urlRoute = require("./routes/url.router")
const {connectMongoDB}= require("./connect")
const URL =require ("./model/url")
const app= express();
 const PORT=8000;
 app.use(express.urlencoded({ extended: false }));
connectMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visiteHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true }
  );

  if (!entry) {
    return res.status(404).json({ message: "Short URL not found" });
  }

  return res.redirect(entry.redirectUrl);
});
app.use(express.json())
 app.use("/url",urlRoute)
app.listen(PORT,() =>console.log(`Server is running at PORT${PORT}`))
