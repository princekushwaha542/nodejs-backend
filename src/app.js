const express = require('express');

const app = express(); //create a server using express
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/about',(req,res)=>{
    res.send('About page')
})
module.exports = app;