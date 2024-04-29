const mongoose = require('mongoose');
const ClothesDonationSchema = new mongoose.Schema({
    ngo: {},
    user: {},

    dressFor: {
        type: String,
        enum: ['men', 'women', 'children', 'all'],
        // required: [true, "please Tell clothes type"],
    },
    estimateCount: {
        type: String,
        required: [true, 'Please Give a Count'],
        default: "1"
    },
    Vehicle: {
        type: String,
        enum: ['bike', 'truck'],
        default: 'bike'
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
    },


    // deliveryType: {
    //     type: String,
    //     enum: ['Pickup', 'DropOff'],
    //     required: [true, 'Please tell the Delivery Type'],
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    // currLoc: {
    //     type: String,
    //     //required: [true, 'Add your Location'],
    // },
    // Status: {
    //     type: String,
    //     enum: ['Requested', 'Delivered', 'picked'],
    //     default: 'Requested'
    // },


});

module.exports = mongoose.model('ClothesDonation', ClothesDonationSchema);
