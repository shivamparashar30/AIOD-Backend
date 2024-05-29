const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        type: String,
        required: [true, 'Please enter your phoneno'],
        unique: true,
        maxlength: [10, 'Enter 10 numbers only'],
    },
    Description: {
        type: String
    },
    Address: {
        type: String
    },

    ImageUrl: {
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
        // required: [true, ' Enter Ngo Regestration number'],
        default: 0
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
    donationCount: {
        type: Number
    },
    driverName: {
        type: String
    },
    driverPhone: {
        type: String
    }
});
//encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    //for hashing the password in database
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

//sign JWT and Token

UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

//matches user entered password to hashed password in db

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.getResetPasswordToken = function () {
    // Generate Token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Hash Token and set to resetPasswordToken Field
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    // Set expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model('User', UserSchema);