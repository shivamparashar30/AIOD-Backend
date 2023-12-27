const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const MoneyDonation = require('../models/MoneyDonation');

//@desc         Donate money   
//@routes       post/api/v1/moneydonate
//@access       private
exports.donateMoney = asyncHandler(async (req, res, next) => {
    const { paymentID, donationAmount, status, createdAt } = req.body
    const moneyDonation = await MoneyDonation.create({
        paymentID,
        donationAmount, status, createdAt
    });

    res.status(200).json({
        success: true,
        data: moneyDonation
    });
});

//@desc         Get Donate money list  
//@routes       GET/api/v1/donatedmoneylist
//@access       private
exports.getMoneyDonationList = asyncHandler(async (req, res, next) => {
    const money = await MoneyDonation.find();
    res.status(200).json({
        success: true,
        count: money.length,
        data: money
    });
});