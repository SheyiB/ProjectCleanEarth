const express = require("express");
const {
  startPayment,
  createPaymentForTransaction,
  getPaymentFromUser,
} = require("../controllers/payment");

const router = express.Router();

router.post("/", startPayment);
router.get("/createPayment", createPaymentForTransaction);
router.get("/paymentDetails", getPaymentFromUser);

module.exports = router;
