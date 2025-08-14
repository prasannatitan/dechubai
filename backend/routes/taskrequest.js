const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TaskRequest = require("../models/taskRequest");
const TaskList = require("../models/ProjectModel");


router.post("/newtask", (req, res) => {

    const { taskname,description, from, admin, projectname } = req.body;

  
    if (!taskname || !description || !from || !admin || !projectname) {
        return res.status(400).json({ status: "false", message: "Invalid request data" });
    }
    
    const taskRequest = new TaskRequest({
        name: taskname,
        date: new Date(),
        for: admin,
        from: from,
        description: description,
        projectname: projectname
    });
    taskRequest.save()
        .then(() => {
            console.log("Task request saved successfully");
            return res.status(200).json({ status: "true", message: "Task request saved successfully" });
        })
        .catch((error) => {
            console.error("Error saving task request:", error);
            return res.status(500).json({ status: "false", message: "Error saving task request" });
        });
   
})

router.get("/gettask", async (req, res) => {
    const email  = req.query.email;
    try {
        const tasks = await TaskRequest.find({ for: email });
        return res.status(200).json({ status: "true", tasks });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return res.status(500).json({ status: "false", message: "Error fetching tasks" });
    }
})

router.post("/accepttask", async (req, res) => {
     
    const { projectname, name, id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
  return res.status(400).json({ message: "Invalid task ID" });
}

    const taskLists = await TaskList.findOne({ name: projectname });

    if (!taskLists) {
      return res.status(404).json({ message: "Project not found" });
    }

    const remove  = await TaskRequest.deleteOne({ _id: new mongoose.Types.ObjectId(id)})
    console.log(remove)

    const newTask = {
      name,
      Status: 0,
      date: new Date(),
      
      _id: new mongoose.Types.ObjectId(), // generate new ObjectId for task
    };

    taskLists.task.push(newTask);
    await taskLists.save();
    res.status(200).json({ message: "Task added successfully" });
  
 
});


module.exports = router;

