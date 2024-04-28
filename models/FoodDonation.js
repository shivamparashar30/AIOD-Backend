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
        default: "0"
    },

    typeOfFood: {
        type: String,
        enum: ['veg', 'non-veg', 'both']


    },
    Vehicle: {
        type: String,
        enum: ['bike', 'truck'],
        default: 'bike'
    },
    source: {
        type: String,
        enum: ['home', 'restaurant', 'events', 'others'],
    },
    foodItem: {
        type: String
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    address3: {
        type: String
    },
    pincode: {
        type: Number
    },
    phoneno: {
        type: Number
    }
});

module.exports = mongoose.model('FoodDonation', FoodDonationSchema);
