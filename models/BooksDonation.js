const mongoose = require('mongoose');
const BooksDonationSchema = new mongoose.Schema({
    user: {},
    ngo: {},
    bookTitle: {
        type: String,
        required: true,
    },
    bookQuantity: {
        type: Number,
        default: 1,
    },
    bookAuthor: {
        type: String,

    },
    bookClass: {
        type: String,
    },
    bookSubject: {
        type: [String],
    },
    bookGenre: {
        type: String,
        enum: ['fiction', 'non-fiction'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deliveryType: {
        type: String,
        enum: ['Pickup', 'DropOff'],
        required: [true, 'Please tell the Delivery Type'],
    },
    Status: {
        type: String,
        enum: ['Requested', 'Delivered', 'picked'],
        default: 'Requested'
    },
    currloc: {
        type: String,
        //required:[true,'please provide your current location'],
    },
});

module.exports = mongoose.model('BooksDonation', BooksDonationSchema);