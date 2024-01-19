const express = require("express");
const { isAuthenticatedUser,authorizeRoles } = require("../middleWare/auth");
const {registerUser,loginUser,logoutUser,forgotPassword, resetPassword, getUserDetails, updateUserDetails, deleteUser} = require("../controllers/userController");
const router = express.Router();

// Register User 
router.route("/user/register").post(registerUser);

// Login User
router.route("/user/login").post(loginUser);

// Logout User
router.route("/user/logout").get(logoutUser);

// Forgot Password
router.route("/user/forgotpassword").post(forgotPassword);

// Reset password
router.route("/user/resetpassword/:token").put(resetPassword);

// Get users details
router.route("/user/getusers").get(getUserDetails);

// Update user details
router.route("/user/updateuser/:id").put(updateUserDetails);

// Delete user
router.route("/user/deleteuser/:id").delete(deleteUser);

module.exports = router;
