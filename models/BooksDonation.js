const mongoose = require('mongoose');
const BooksDonationSchema = new mongoose.Schema({

    user: {},
    ngo: {},

    estimateCount: {
        type: String,
        required: [true, 'Please Give a Count'],
        default: "0"
    },
    Vehicle: {
        type: String,
        enum: ['bike', 'truck'],
        default: 'bike'
    },
    bookDetails: {
        type: String
    }
});

module.exports = mongoose.model('BooksDonation', BooksDonationSchema);