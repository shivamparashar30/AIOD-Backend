const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const ClothesDonation = require('../models/ClothesDonation');

const User = require('../models/User');


//@desc         Donate clothes   
//@routes       post/api/v1/clothdonate
//@access       private

exports.donateClothesDropoff = asyncHandler(async (req, res, next) => {
    const { clothesAgesType, clothesSeasonType, clothesquantity, ageGroup, deliveryType } = req.body;
    //change
    let user = await User.findById(req.user.id);

    const clothesDonation = await ClothesDonation.create({ clothesAgesType, clothesSeasonType, clothesquantity, ageGroup, deliveryType });
    res.status(200).json({
        success: true,
        data: clothesDonation,
    });

    //change
    user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $inc: { donationCount: 1 } },
    );

    res.status(200).json({
        success: true,
        data: booksDonation,
    });
});

// @desc    Immidiate pickup
//@route    POST/api/v1/clothes/immidiatepickup
//@access   private

exports.immidiateclothespickup = asyncHandler(async (req, res, next) => {
    const { clothesAgesType, clothesSeasonType, clothesquantity, ageGroup, currLoc, deliveryType, status } = req.body;

    const clothesDonation = await ClothesDonation.create({ clothesAgesType, clothesSeasonType, clothesquantity, ageGroup, currLoc, deliveryType, status });
    res.status(200).json({
        success: true,
        //data: immidiatePickup,
        message: 'you have requested an clothes pickup',
    });
});
// @desc    Get Donation list
//@route    GET/api/v1/clothes/clotheslist
//@access   private

exports.getClothesList = asyncHandler(async (req, res, next) => {
    const cloth = await ClothesDonation.find();
    res.status(200).json({
        success: true,
        count: cloth.length,
        data: cloth
    });
});
