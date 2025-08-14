const taskList = require('../models/ProjectModel')
const express = require('express')
const {bucket} = require('../config/firebase');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const router = express.Router();


const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 2 * 1024 * 1024 }, // Limit to 2MB
});

router.post('/taskList', upload.single('avatar'), async (req, res) => {
    const { name, by, for: fore, progress, date, task, Statistics, Overview, hours } = req.body;
    const file = req.file;

    const parsedTask = task ? JSON.parse(task) : [];
    const parsedStatistics = Statistics ? JSON.parse(Statistics) : [{ completed: 0, Underprogress: 0, needsRevision: 0, WorkLeft: 0 }];
    const parsedOverview = Overview ? JSON.parse(Overview) : [];


    let publicUrl = ""; // default if no image

    if (file) {
        const blob = bucket.file(`${uuidv4()}_${file.originalname}`);
        const blobStream = blob.createWriteStream({
            metadata: { contentType: file.mimetype }
        });

        blobStream.on('error', (error) => {
            console.error("Upload Error:", error);
            return res.status(500).json({ success: false, message: 'Error uploading file' });
        });

        blobStream.on('finish', async () => {
            await blob.makePublic();
            publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

            try {
                const newTask = new taskList({
                    avatar: publicUrl,
                    name,
                    for: fore,
                    by,
                    progress,
                    date,
                    task: parsedTask,
                    Statistics: parsedStatistics,
                    Overview: parsedOverview,
                   
                });

                await newTask.save();
                return res.status(200).json({ message: "created", project: newTask });
            } catch (error) {
                console.error('Error creating project:', error);
                return res.status(500).json({ error: "Error creating project" });
            }
        });

        blobStream.end(file.buffer);
    } else {
        // no image upload, proceed immediately
        try {
            const newTask = new taskList({
                avatar: publicUrl, // will be ""
                name,
                for: fore,
                by,
                progress,
                date,
                task: parsedTask,
                Statistics: parsedStatistics,
                Overview: parsedOverview,
               
            });

            await newTask.save();
            return res.status(200).json({ message: "created", project: newTask });
        } catch (error) {
            console.error('Error creating project (no image):', error);
            return res.status(500).json({ error: "Error creating project" });
        }
    }
});



router.get('/taskList', async (req, res) => {
    const data = await taskList.find();
    return res.status(200).json({ projects: data })
})
module.exports = router