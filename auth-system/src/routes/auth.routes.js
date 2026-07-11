const express = require('express');
const authcontroller = require("../controllers/auth.controllers");

const router = express.Router();

router.post('/register', authcontroller.registerUser){
    router.gest('/test', (req, res) => {
        console.log("cocing test route");
    })
    res.status(200).json({
        message: "test route working"
    })  
}


module.exports = router;