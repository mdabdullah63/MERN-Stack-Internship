const express = require("express");

const app = express();

const userRoutes = require("./routes/user.routes");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRoutes);

module.exports = app;
