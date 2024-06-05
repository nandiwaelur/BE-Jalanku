const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

router.get("/profile", ensureAuthenticated, (req, res) => {
    res.send("Welcome to your profile, " + req.user.username);
});

module.exports = router;
