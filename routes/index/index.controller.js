const response = require("../../helpers/response");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const {
    signAccessToken,
    verifyAccessToken,
} = require("../../middleware/isAuthenticated");

// Function controller

const helloIndex = (req, res) => {
    forExample();

    response.res200("Success fetching the API!", null, res);
};

module.exports = { helloIndex };
