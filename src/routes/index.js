const express = require("express");

const v1Routes = require("./v1Routes/v1Routes");

const router = express.Router();

router.use("/api", v1Routes);

module.exports = router