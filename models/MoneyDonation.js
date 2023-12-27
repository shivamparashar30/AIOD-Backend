const mongoose = require('mongoose');
const MoneyDonationSchema = new mongoose.Schema({
    paymentID: {
        type: String,
        required: [true, 'Please enter paymentid '],
    },
    ngo: {},
    user: {},
    donationAmount: {
        type: Number,
        required: [true, 'Please provide the amount'],
    },
    status: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model('MoneyDonation', MoneyDonationSchema);