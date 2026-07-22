const express = require('express');
const authcontroller = require("../controllers/auth.controllers");

const router = express.Router();

router.post('/register', authcontroller.registerUser);

router.get('/test', (req, res) => {
    console.log("cookies", req.cookies);
    res.status(200).json({
        message: "test route working",
        cookies: req.cookies
    })  
})


module.exports = router;