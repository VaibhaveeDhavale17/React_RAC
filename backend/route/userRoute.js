const express = require("express");
const {registerUser} = require("../controllers/userController");
const router = express.Router();

// Register User 
router.route("/user/register").post(registerUser);

module.exports = router;
