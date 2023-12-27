const express = require('express');
const {
    donateBooksDropoff,
    immidiateBooksPickup,
    getBooksDonationList
} = require('../controllers/BooksDonation');

const router = express.Router();

router.post('/donatebooks/dropoff', donateBooksDropoff);
router.post('/immidiatebooks/pickup', immidiateBooksPickup);
router.get('/booksdonation/list', getBooksDonationList);

module.exports = router;

