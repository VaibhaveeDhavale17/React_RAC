const User = require("../modals/userModal");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleWare/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

/*************
CREATE New User
**************/

exports.registerUser = catchAsyncErrors(async(req,res,next)=>{
    
    const {userName,userEmail,userPassword} = req.body;

    // Validation

    if(!userName || !userEmail || !userPassword ){
        return next(new ErrorHander("Please enter the required fields",400));
    }

    if(userPassword.length < 6){
        return next(new ErrorHander("Password must be up to 6 characters",400));
    }

    const userExists = await User.findOne({userEmail});
    if(userExists){
        return next(new ErrorHander("Email been already used try with different email or login",400));
    }
    
    // Creting A user 
    const user = await User.create({
        userName,
        userEmail,
        userPassword,
    });
    sendToken(user, 201, res);
});


/*************
Login User
**************/

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { userEmail, userPassword } = req.body;
  
    // checking if user has given password and email both
  
    if (!userEmail || !userPassword) {
      return next(new ErrorHander("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ userEmail }).select("+userPassword");
  
    if (!user) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(userPassword);
  
    if (!isPasswordMatched) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
    sendToken(user, 200, res);
  });