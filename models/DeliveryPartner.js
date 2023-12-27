const mongoose = require('mongoose');

const DeliveryPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter Your name.'],
    },
    phoneno: {
        type: Number,
        required: [true, 'Enter Your Phone Number'],
    },
    foodPickedup: {
        type: Boolean,
        default: 0,
    },
    foodDelivered: {
        type: Boolean,
        default: 0,
    },
    assignedBy: {
        type: String,
    },
    user: {
        type: String,
    },
});

module.exports = mongoose.model('DeliveryPartner', DeliveryPartnerSchema);
