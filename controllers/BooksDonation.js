const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const BooksDonation = require('../models/BooksDonation');

//@desc         Donate books   
//@routes       post/api/v1/donateBooksDropoff
//@access       private
exports.donateBooksDropoff = asyncHandler(async (req, res, next) => {
    const { bookTitle, bookQuantity,
        bookAuthor, bookClass, bookSubject, bookGenre,
        createdAt, deliveryType } = req.body;

    const booksDonation = await BooksDonation.create({
        bookTitle, bookQuantity,
        bookAuthor, bookClass, bookSubject, bookGenre,
        createdAt, deliveryType,
    });

    res.status(200).json({
        success: true,
        data: booksDonation,
    });
});

// @desc    Immidiate books pickup
//@route    POST/api/v1/immidiatebookspickup
//@access   private

exports.immidiateBooksPickup = asyncHandler(async (req, res, next) => {
    const { bookTitle, bookQuantity,
        bookAuthor, bookClass, bookSubject, bookGenre,
        createdAt, deliveryType, Status } = req.body;

    const booksDonation = await BooksDonation.create({
        bookTitle, bookQuantity,
        bookAuthor, bookClass, bookSubject, bookGenre,
        createdAt, deliveryType, Status
    });

    res.status(200).json({
        success: true,
        data: booksDonation,
    });
});

// @desc    Get books Donation list
//@route    GET/api/v1/clothes/clotheslist
//@access   private

exports.getBooksDonationList = asyncHandler(async (req, res, next) => {
    const books = await BooksDonation.find();
    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    });
});