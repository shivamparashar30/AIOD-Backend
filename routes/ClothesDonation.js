const express = require('express');
const {
    donateClothesDropoff,
    immidiateclothespickup,
    getClothesList
} = require('../controllers/ClothesDonation');

const router = express.Router();
const { protect, checkVerification } = require('../middleware/auth');

router.post('/clothesdropoff', protect, donateClothesDropoff);
router.post('/immidiateclothespickup', immidiateclothespickup);
router.get('/getclotheslist', getClothesList);

module.exports = router;     