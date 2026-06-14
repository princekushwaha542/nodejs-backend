const express = require('express');
const multer = require('multer');
const uploadFile = require('../service/storage.service');

const app = express();

app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage()
});

app.post('/create-post', upload.single('image'), async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    if (!req.file) {
        return res.status(400).json({
            message: 'No file uploaded'
        });
    }

    const result = await uploadFile(req.file.buffer);

    res.json(result);
});

module.exports = app;