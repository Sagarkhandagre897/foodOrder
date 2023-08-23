// middleware/authMiddleware.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const asyncHandler = require("express-async-handler");

// Implement authentication middleware here

const authMiddleware  = asyncHandler(async(req , res , next) => {

    let token ;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];

        try{
            if(token){
                const decoded = jwt.verify(token , config.jwtSecret);
                const user  = await User.findById(decoded?.userId);
                req.user = user;
                next();
            }
        }catch(err){
            console.error('Error verifying token:', error);
            res.status(401).json({ message: 'Invalid token' });
        }
    }else{
        throw new Error("there is no token attached to header");
    }
});

module.exports= authMiddleware;



