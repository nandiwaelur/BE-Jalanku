const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
const { isAuthenticated } = require("./middleware/isAuthenticated");

// Router
const indexRouter = require("./routes/index/index.router");

app.set("trust proxy", 1);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/", indexRouter);

module.exports = app;
