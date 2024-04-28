const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const FoodDonation = require('../models/FoodDonation');
const DeliveryPartner = require('../models/DeliveryPartner');

const User = require('../models/User');


// @desc    Plan a Mess
//@route     POST/api/v1/food/planmess
//@access   private
exports.planMess = asyncHandler(async (req, res, next) => {
    const { type, estimateCount, PerPlateCosting, MealType, Occasion, Date } = req.body;

    const foodDonation = await FoodDonation.create({ type, estimateCount, PerPlateCosting, MealType, Occasion, Date });
    res.status(200).json({
        success: true,
        data: foodDonation
    });
});

// @desc    Immidiate pickup
//@route    POST/api/v1/food/immidiatepickup
//@access   private

exports.immidiatePickup = asyncHandler(async (req, res, next) => {
    // const { type, estimateCount, Date, currLoc, status } = req.body;

    let user = await User.findById(req.user.id);


    const foodDonation = await FoodDonation.create(req.body);

    user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $inc: { donationCount: 1 } },
    );


    res.status(200).json({
        success: true,
        data: foodDonation,
        message: 'you have requested an immidiate pickup',
    });
});

// @desc    Get Donation list
//@route    GET/api/v1/food/foodlist
//@access   private

exports.getFoodList = asyncHandler(async (req, res, next) => {
    const food = await FoodDonation.find();
    res.status(200).json({
        success: true,
        count: food.length,
        data: food
    });
});

// @desc    Add Delivery Partner
//@route    post/api/v1/food/addpartner
//@access   private

exports.addDelivaryPartner = asyncHandler(async (req, res, next) => {
    const { name, phoneno } = req.body;
    const food = await DeliveryPartner.create({ name, phoneno });
    res.status(200).json({
        success: true,
        message: 'Delivary Partner Created',
    });
});

// @desc    Delete Delivery Partner
//@route    delete/api/v1/food/deletepartner/:id
//@access   private

exports.deleteDeliveryPartner = asyncHandler(async (req, res, next) => {
    const food = await DeliveryPartner.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        message: {},
    });
});


// @desc     update Delivery Partner
//@route    put/api/v1/food/deletepartner
//@access   private

exports.updateDeliveryPartner = asyncHandler(async (req, res, next) => {

    const field = { name: req.body.name, phoneno: req.body.phoneno } = req.body;
    const food = await DeliveryPartner.findByIdAndUpdate(req.params.id, field, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        data: food
    });
});


// @desc    Assign Delivery Partner
//@route    put/api/v1/food/assignpartner
//@access   private

exports.assignPartner = asyncHandler(async (req, res, next) => {

    const field = { assignedBy: req.body.assignedBy, user: req.body.assignedBy } = req.body;
    const food = await DeliveryPartner.findByIdAndUpdate(req.params.id, field, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        success: true,
        message: "Delivery Partner Assigned",
        data: food,
    });
});

// @desc    Get Partners list
//@route    GET/api/v1/food/partnerlist
//@access   private

exports.getPartnerList = asyncHandler(async (req, res, next) => {
    const food = await DeliveryPartner.find();
    res.status(200).json({
        success: true,
        count: food.length,
        data: food
    });
});






