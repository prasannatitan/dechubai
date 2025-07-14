const taskList = require('../models/taskModel')
const express = require('express')
const router = express.Router();
const cron = require('node-cron');

cron.schedule('0 0 * * *', async () => {
  try {
    await taskList.updateMany({}, {
  $push: {
    hours: {
      $each: [0],
      $slice: -30
    }
  }
});
    console.log('Added daily 0 hours');
  } catch (err) {
    console.error('Error adding daily 0 hours:', err);
  }
});


router.get("/get/:projectname", async (req, res) => {
 
    const { projectname } = req.params;
    if(projectname =="all") {
        const data = await taskList.find();
        return res.json(data);
    }else{
   
        const data = await taskList.find({ name: projectname });
       console.log(data)
        return res.json(data);
    
}

})

router.put('/update/:id', async (req, res) => {
  
  try {
    const updated = await taskList.findByIdAndUpdate(req.params.id, { $set: req.body }, {
      new: true,
      runValidators: true
    })

    if (!updated) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.json(updated)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router;