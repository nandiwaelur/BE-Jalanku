const express = require("express");
const router = express.Router();
const index = require("./index.controller");
const limit = require("../../config/rateLimiter");

router.route("/").get(limit(10), index.helloIndex);

module.exports = router;
