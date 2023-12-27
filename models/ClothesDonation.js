const mongoose = require('mongoose');
const ClothesDonationSchema = new mongoose.Schema({
    ngo: {},
    user: {},
    clothesAgesType: {
        type: String,
        enum: ['Infant', 'Boys', 'Girls', 'Men', 'Women'],
        required: [true, "please Tell clothes type"],
    },
    clothesSeasonType: {
        type: String,
        enum: ['Summer', 'Winter', 'Rainy'],
        required: [true, "please Tell Season type"],
    },
    clothesquantity: {
        type: Number,
        min: 1,
        max: 999,
        default: 1,
    },
    ageGroup: {
        type: String,
    },
    deliveryType: {
        type: String,
        enum: ['Pickup', 'DropOff'],
        required: [true, 'Please tell the Delivery Type'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    currLoc: {
        type: String,
        //required: [true, 'Add your Location'],
    },
    Status: {
        type: String,
        enum: ['Requested', 'Delivered', 'picked'],
        default: 'Requested'
    },


});

module.exports = mongoose.model('ClothesDonation', ClothesDonationSchema);
