const ErrorResponse = require('../utils/errorResponse');
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    console.log(err);

    //mongoose bad object id
    if (err.name === 'CastError') {
        const message = `Event not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    if (err.code === 11000) {
        const message = 'Duplicate Feild Value Entered';
        error = new ErrorResponse(meaage, 400);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message, 400);
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error',
    });
};

module.exports = errorHandler;