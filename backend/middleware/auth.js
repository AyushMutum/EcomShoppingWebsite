// check the role of the user whether it is user or seller 
// check all our route

const ErrorHandler = require('../utilis/ErrorHandler')
const catchAsyncError = require('./catchAsyncError')

// to alert user to login to get access
const jwt = require("jsonwebtoken");
const User = require('../model/user')


exports.isAuthenticated = catchAsyncError(async(req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
});


