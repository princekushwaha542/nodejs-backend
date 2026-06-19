const express = require('express');
const multer = require('multer');
const uploadFile = require('./service/storage.service');
const postModel = require('./model/post.model');
const app = express();

app.use(express.json());
const upload = multer({
    
    storage: multer.memoryStorage()
});

app.post('/create-post', upload.single('image'), async (req, res) => {
        
    // console.log(req.body);
    // console.log(req.file);
   
    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        caption: req.body.caption,
        image: result.url
    })
    res.status(201).json({
        message: 'Post created successfully',
        post 
    });
});

module.exports = app;