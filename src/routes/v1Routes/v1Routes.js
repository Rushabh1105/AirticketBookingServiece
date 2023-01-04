const express = require("express");

const router = express.Router();

const BookingController = require("../../controller/booking-controller");

router.post("/booking", BookingController.createBooking);







module.exports = router;