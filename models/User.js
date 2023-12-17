const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Add a username'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please use a valid URL with HTTP or HTTPS',
        ],
        required: [true, 'Please enter your email address'],
        unique: true,
    },
    phoneno: {
        type: Number,
        required: [true, 'Please enter your phoneno'],
        unique: true,
        maxlength: [10, 'Enter 10 numbers only'],
    },

    profilePicture: {
        type: String,
        default: 'no-photo.png',
    },
    role: {
        type: String,
        enum: ['user', 'ngo'],
        default: 'user',
    },
    ngoRegistrationNo: {
        type: String,
        required: [true, ' Enter Ngo Regestration number'],
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isDenied: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },


});