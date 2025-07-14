const taskList = require('../models/taskModel')
const express = require('express')
const router = express.Router();


router.post('/taskList', async (req, res)=>{
    const data = req.body;

    const newTask  =  new taskList({
        avatar: "Asfdsaf",
        name: "lop",
        for:"busaprince13@gmail.com",
        by: "busaprince13@gmail.com",
        progress: 100,
        task: [
        {name:"Seo", completed:40},
         {name:"Web Page Dev", completed:50},
          {name:"Web Page Dev", completed:50},
           {name:"Web Page Dev", completed:50},
            {name:"Web Page Dev", completed:50}
        ],
        Statistics: [{completed:30, Underprogress:40, needsRevision:20, WorkLeft:0}],
        hours: [1,2,3,4,5]

    })
    await newTask.save();
    return res.status(200).json({message: "created"});

})

router.get('/taskList', async (req, res)=>{
    const data = await taskList.find();
    return res.status(200).json({projects: data})
})
module.exports = router