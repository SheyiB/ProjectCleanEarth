const express = require('express');
const { startPayment, createPayment, getPayment } = require('../controllers/payment');

const router = express.Router()

router.post('/', startPayment );
router.get('/createPayment', createPayment);
router.get('/paymentDetails', getPayment);

module.exports = router;