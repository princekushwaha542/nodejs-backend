const express = require('express');
const multer = require('multer');
const uploadFile = require('../service/storage.service');

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
});

router.post('/create-post', upload.single('image'), async (req, res) => {
    try {
        console.log("Body:", req.body);
        console.log("File:", req.file);

        if (!req.file) {
            return res.status(400).json({
                message: "Image is required"
            });
        }

        const file = await uploadFile(req.file);

        res.status(201).json({
            message: "Post created successfully",
            imageUrl: file
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

module.exports = router;