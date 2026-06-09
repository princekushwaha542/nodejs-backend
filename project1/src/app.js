const express = require('express')
const multer = require('multer') // install multer 

const app = express();
app.use(express.json());// middleware to parse json data
const upload = multer({storage : multer.memoryStorage()})

app.post("/create-post", upload.single('image'),async (req,res) =>{
    console.log(req.body);
    console.log(req.file);
})

module.exports = app;
