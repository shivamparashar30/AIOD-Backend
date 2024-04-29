const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const BooksDonation = require('../models/BooksDonation');
// Copy this line
const User = require('../models/User');

//@desc         Donate books   
//@routes       post/api/v1/donateBooksDropoff
//@access       private
exports.donateBooksDropoff = asyncHandler(async (req, res, next) => {
    // const { bookTitle, bookQuantity,
    //     bookAuthor, bookClass, bookSubject, bookGenre,
    //     createdAt, deliveryType } = req.body;

    // Copy this line
    let user = await User.findById(req.user.id);

    const booksDonation = await BooksDonation.create(req.body);

    // Copy this line
    user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $inc: { donationCount: 1 } },
    );

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