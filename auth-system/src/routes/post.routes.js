const express = require('express');
const { CopyMinus } = require('lucide-react');
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model")

const router = express.Router()

router.post("/create" ,async (req ,res) =>{

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "unauthrized"
        })
    }
   try{
     const decodet = jwt.verify(token , process.env.JWT_SECRET);
     const user = await userModel.findOne({
        _id : decodet.id 
     })
     console.log(user);
   }catch{
    res.status(401).json({
        message : "token is invalid"
    })
   }

    res.send('Post Created Seccessfuly')
})

module.exports = router;