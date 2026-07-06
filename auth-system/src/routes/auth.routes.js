const express = require('express');
const authcontroller = require("../controllers/auth.controllers");

const router = express.Router();

router.post('/register', authcontroller.registerUser);

module.exports = router;