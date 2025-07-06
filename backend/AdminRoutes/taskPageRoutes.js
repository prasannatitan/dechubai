const taskList = require('../models/taskModel')
const express = require('express')
const router = express.Router();

router.get("/get/:projectname", async (req, res) => {
    const { projectname } = req.params;
    try {
        const data = await taskList.find({ name: projectname }, { task: 1, _id: 0 });
       
        return res.json(data);
    } catch {
        return res.json({ message: "data not found" })
    }

})

module.exports = router;