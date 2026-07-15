const express = require('express');
const router = express.Router();
const { handleSignUp, handleLogin } = require("../controllers/user.cotroller");

router.get("/register", (req, res) => {
    res.render("user");
});

router.post("/register", handleSignUp);

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", handleLogin);

module.exports = router;
