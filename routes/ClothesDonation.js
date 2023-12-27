const express = require('express');
const {
    donateClothesDropoff,
    immidiateclothespickup,
    getClothesList
} = require('../controllers/ClothesDonation');

const router = express.Router();

router.post('/clothesdropoff', donateClothesDropoff);
router.post('/immidiateclothespickup', immidiateclothespickup);
router.get('/getclotheslist', getClothesList);

module.exports = router;     