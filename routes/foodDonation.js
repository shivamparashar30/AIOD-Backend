const express = require('express');
const {
    planMess,
    immidiatePickup,
    getFoodList,
    getPartnerList,
    addDelivaryPartner,
    deleteDeliveryPartner,
    updateDeliveryPartner,
    assignPartner
} = require('../controllers/foodDonation');

// function for routing
const router = express.Router();

router.get('/foodlist', getFoodList);
router.post('/planmess', planMess);
router.post('/immidiatepickup', immidiatePickup);
router.get('/getpartnerlist', getPartnerList);
router.post('/addpartner', addDelivaryPartner);
router.put('/updatepartner/:id', updateDeliveryPartner);
router.put('/assignpartner/:id', assignPartner);
router.delete('/deletepartner/:id', deleteDeliveryPartner);



module.exports = router;    