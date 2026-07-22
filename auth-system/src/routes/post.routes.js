const express = require('express');
const { CopyMinus } = require('lucide-react');

const router = express.Router()

router.post("/create" , (req , body) =>{
    console.log(req.body);
    console.log(req.cookies);
})

module.exports = "router";