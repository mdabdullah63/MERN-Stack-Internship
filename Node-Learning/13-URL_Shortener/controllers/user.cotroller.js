const uuid = require("uuid");

const User = require("../model/user");
const { SetUser } = require("../service/auth")
async function handleSignUp(req, res) {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).send("Form data missing!");
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("All fields are required!");
    }

    await User.create({ name, email, password });

    return res.redirect("/url/html");

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).send("Internal Server Error: " + error.message);
  }
}

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.render("login", { error: "Invalid Email or Password" });
    }


    const sessionId = uuid.v4();
    SetUser(sessionId, user);
    res.cookie("uid", sessionId)
    return res.redirect("/url/html");

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).send("Internal Server Error: " + error.message);
  }
}

module.exports = { handleSignUp, handleLogin };
