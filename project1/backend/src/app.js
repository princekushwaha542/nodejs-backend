const express = require('express');
const multer = require('multer');
const uploadFile = require('./service/storage.service');
const cors = require("cors");
const postModel = require('./model/post.model');

const app = express();
app.use(cors())
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

app.get('/posts', async (req, res)=>{
    const posts = await postModel.find()

    return res.status(200).json({
        message: 'Posts fetched successfully',
        posts
    })
})
module.exports = app;