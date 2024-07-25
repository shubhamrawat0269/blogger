const express = require("express");
const { authController } = require("../controllers");

const router = express.Router();

router.post("/sign-up", authController.signup);

module.exports = router;
