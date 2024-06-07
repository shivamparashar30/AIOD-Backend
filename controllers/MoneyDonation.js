const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const MoneyDonation = require('../models/MoneyDonation');

const User = require('../models/User');


//@desc         Donate money   
//@routes       post/api/v1/moneydonate
//@access       private
exports.donateMoney = asyncHandler(async (req, res, next) => {
    const { paymentID, donationAmount, ngoId, userId, userName, userEmail, userPhoneno } = req.body

    let user = await User.findById(req.user.id);


    const moneyDonation = await MoneyDonation.create({
        paymentID, donationAmount, ngoId, userId, userName, userEmail, userPhoneno
    });

    user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $inc: { donationCount: 1 } },
    );

    res.status(200).json({
        success: true,
        data: moneyDonation
    });
});

//@desc         Get Donate money list  
//@routes       GET/api/v1/donatedmoneylist/:id
//@access       private
exports.getMoneyDonationList = asyncHandler(async (req, res, next) => {
    const money = await MoneyDonation.find({ ngoId: { $in: req.user.id } });
    res.status(200).json({
        success: true,
        count: money.length,
        data: money
    });
});

//@desc         Get Donate money list  for user
//@routes       GET/api/v1/donatedmoneylist/:id
//@access       private
exports.getMoneyDonationList = asyncHandler(async (req, res, next) => {
    const money = await MoneyDonation.find({ userId: { $in: req.user.id } });
    res.status(200).json({
        success: true,
        count: money.length,
        data: money
    });
});