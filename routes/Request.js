const express = require('express');
const {
    sendRequest,
    requestStatus,
    getRecipientRequestes,
    getRequesterRequestes,
} = require('../controllers/Request');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router.route('/sendrequest').post(protect, sendRequest);

router
    .route('/:id')
    .put(protect, authorize('ngo'), requestStatus);

router.route('/recipientRequests/:id').get(protect, getRecipientRequestes);

router.route('/requesterRequests/:id').get(protect, getRequesterRequestes);

module.exports = router;