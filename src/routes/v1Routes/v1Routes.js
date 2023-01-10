const express = require("express");

const router = express.Router();

//const { createChannel } = require("../../utils/message-queue");
const BookingController = require("../../controller/booking-controller");

//const channel = await createChannel();
const bookingController = new BookingController();

router.post("/booking", bookingController.createBooking);
router.post('/publish', bookingController.sendMessageToQueue);

module.exports = router;