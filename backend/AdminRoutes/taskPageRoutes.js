const taskList = require('../models/taskModel')
const express = require('express')
const router = express.Router();
const cron = require('node-cron');

cron.schedule('0 0 * * *', async () => {
  try {
    const dayName = moment().format('ddd'); // 'Mon', 'Tue', etc.

    await taskList.updateMany({}, {
      $push: {
        hours: {
          $each: [{ day: dayName, hours: 0 }],
          $slice: -30
        }
      }
    });

    console.log(`Added 0 hours for ${dayName}`);
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
      
        return res.json(data);
    
}

})

router.get('/getById/:id', async (req, res) => {
  try {
    const data = await taskList.findById(req.params.id);
    if (!data) return res.status(404).json({ error: 'Project not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

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