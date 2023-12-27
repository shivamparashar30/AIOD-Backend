const mongoose = require('mongoose');
const FoodDonationSchema = new mongoose.Schema({

    type: {
        type: String,
        enum: ['PlanMess', 'ImmidiatePickup'],
    },
    ngo: {},
    user: {},
    estimateCount: {
        type: String,
        required: [true, 'Please Give a Count'],
        default: ""
    },
    PerPlateCosting: {
        type: Number,
        // required: [true, 'Please Per Plate Costing'],
        default: 0,
    },
    MealType: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Snacks', 'Dinner'],
        default: 'Lunch'
    },
    AverageCosting: {
        type: Number,
    },
    PaymentID: {
        type: String,
    },
    PayeeName: {
        type: String,
    },
    Occasion: {
        type: String,
    },
    IsAdvancePaid: {
        type: Boolean,
    },
    IsFullAmountPaid: {
        type: Boolean,
    },

    Date: {
        type: String,
        //required: [true, 'Enter a date'],
    },
    Status: {
        type: String,
        enum: ['Requested', 'Delivered', 'picked'],
        default: 'Requested'
    },
    currLoc: {
        type: String,
        //required: [true, 'Add your Location'],
    },
});

module.exports = mongoose.model('FoodDonation', FoodDonationSchema);
