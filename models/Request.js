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

    // Here 1 = Requested, 2 = Accepted, 3 = Rejected
    status: {
        type: Number,
    },
});

module.exports = mongoose.model('Request', RequestSchema);