const express = require('express');
const {
    donateMoney,
    getMoneyDonationList
} = require('../controllers/MoneyDonation');

const router = express.Router();
const { protect, checkVerification } = require('../middleware/auth');


router.post('/moneydonate', protect, donateMoney);
router.get('/getmoneydonationlist', protect, getMoneyDonationList);

module.exports = router;