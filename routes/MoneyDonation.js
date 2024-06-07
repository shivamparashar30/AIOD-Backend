const express = require('express');
const {
    donateMoney,
    getMoneyDonationList,
    getUserMoneyDonationList
} = require('../controllers/MoneyDonation');

const router = express.Router();
const { protect, checkVerification } = require('../middleware/auth');


router.post('/moneydonate', protect, donateMoney);
router.get('/getmoneydonationlist', protect, getMoneyDonationList);
router.get('/getusermoneydonationlist', protect, getUserMoneyDonationList);

module.exports = router;