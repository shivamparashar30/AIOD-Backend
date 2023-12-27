const express = require('express');
const {
    donateMoney,
    getMoneyDonationList
} = require('../controllers/MoneyDonation');

const router = express.Router();

router.post('/moneydonate', donateMoney);
router.get('/getmoneydonationlist', getMoneyDonationList);

module.exports = router;