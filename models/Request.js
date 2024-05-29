const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    requester: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    recipient: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    donationid: {
        type: String
    },
    donationType: {
        type: String
    },
    userName: {
        type: String
    },

    address2: {
        type: String
    },
    phoneno: {
        type: String
    },
    Item: {
        type: String
    },
    source: {
        type: String
    },
    count: {
        type: String
    },
    vehicle: {
        type: String
    },

    // Here 1 = Requested, 2 = Accepted, 3 = Rejected, 4 = Delivered
    status: {
        type: Number,
    },
});

module.exports = mongoose.model('Request', RequestSchema);