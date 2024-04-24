const express = require('express');
const {
    donateBooksDropoff,
    immidiateBooksPickup,
    getBooksDonationList
} = require('../controllers/BooksDonation');

const router = express.Router();
const { protect, checkVerification } = require('../middleware/auth');


router.post('/donatebooks/dropoff', protect, donateBooksDropoff);
router.post('/immidiatebooks/pickup', immidiateBooksPickup);
router.get('/booksdonation/list', getBooksDonationList);

module.exports = router;

