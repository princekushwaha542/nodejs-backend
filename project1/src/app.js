const express = require('express');
const multer = require('multer');
const uploadFile = require('../service/storage.service');

const app = express();

app.use(express.json());

const upload = multer({
    
    storage: multer.memoryStorage()
});

app.post('/create-post', (req, res) => {
    console.log(req.headers);
    res.send("ok");
});
module.exports = app;