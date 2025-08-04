const taskList = require('../models/taskModel')
const express = require('express')
const router = express.Router();


router.post('/taskList', async (req, res)=>{
    try {
        const data = req.body;

        const newTask = new taskList({
            avatar: data.avatar,
            name: data.name,
            for: data.for,
            by: data.by,
            progress: data.progress,
            date: data.date,
            task: data.task || [],
            Statistics: data.Statistics || [{completed: 0, Underprogress: 0, needsRevision: 0, WorkLeft: 0}],
            Overview: data.Overview || [],
            hours: data.hours || []
        })
        
        await newTask.save();
        return res.status(200).json({message: "created", project: newTask});
    } catch (error) {
        console.error('Error creating project:', error);
        return res.status(500).json({error: "Error creating project"});
    }
})

router.get('/taskList', async (req, res)=>{
    const data = await taskList.find();
    return res.status(200).json({projects: data})
})
module.exports = router