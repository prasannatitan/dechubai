const express = require('express');
const multer = require('multer');
const {bucket} = require('../config/firebase');
const fileFolder = require('../models/fileFolder');
const { v4: uuidv4 } = require('uuid');


const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
});
const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
    const { title, postedBy, foldername } = req.body;
    const file = req.file;
    if (!file)
        return res.json({ success: false, message: 'No file uploaded' });
    const blob = bucket.file(`${uuidv4()}_${file.originalname}`);

    const blobStream = blob.createWriteStream({
        metadata: {
            contentType: file.mimetype,
        }
    });

    blobStream.on('error', (error) => {
        return res.json({ success: false, message: 'Error uploading file' });
    });

    blobStream.on('finish', async () => {
        await blob.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

        try {
            await fileFolder.findOneAndUpdate(
                { name: foldername },
                { $push: { fileUrls: publicUrl } },
                { new: true }
            );

            res.json({ success: true, message: 'File uploaded successfully', imageUrl: publicUrl });
        } catch (error) {
            res.json({ success: false, message: 'Error saving file information to database' });
        }
    });


    blobStream.end(file.buffer);



})


router.get('/files/get/:foldername', async (req, res) => {
    const { foldername } = req.params;

    try {
        const images = await fileFolder.findOne(
            { name: foldername },
            { fileUrls: 1, _id: 0 }
        );

        return res.status(200).json(images);
    } catch (error) {
        return res.status(500).json({ message: (`Error fetching images${foldername}`) });
    }
}
);
module.exports = router;