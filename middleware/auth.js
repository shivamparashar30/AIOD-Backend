const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

//  Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    //  Make sure token exists
    if (!token) {
        return next(new ErrorResponse('Not Authorized to access this route', 401));
    }

    try {
        // Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return next(new ErrorResponse('Not Authorized to access this route', 401));
    }
});

// // Grant Login to Verified NGO's
// exports.checkVerification = () => {
//     return (req, res, next) => {
//         if (req.user.role === "ngo" && req.user.isVerified === false) {
//             return next(
//                 new ErrorResponse(
//                     `NGO is not verified.`, 403
//                 )
//             );
//         }
//         next();
//     }
// }
// Grant access to specific roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorResponse(
                    `User role ${req.user.role} is not authorized to access this route`,
                    403
                )
            );
        }
        next();
    };
};