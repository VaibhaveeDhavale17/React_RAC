const express = require("express");
const {registerUser,loginUser} = require("../controllers/userController");
const router = express.Router();

// Register User 
router.route("/user/register").post(registerUser);
// Login User
router.route("/user/login").post(loginUser);

module.exports = router;
