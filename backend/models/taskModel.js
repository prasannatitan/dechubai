const mongoose = require('mongoose')
const { Schema } = mongoose;

const taskModel = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  by: {
    type: String,
    required: true
  },
  for: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    required: true
  },
   Statistics: [{
        completed: {
          type: Number,
        },
        Underprogress: {
          type: Number,
        },
        needsRevision: {
          type: Number,
        },
        WorkLeft: {
          type: Number
        }
      }],
  task: [
    {
      name: {
        type: String,
      },
      Status: {
        type: Number,
        default: 0
      },
      date: {
        type: Date,
        default: Date.now
      },
      remark: {
        type: String,
      }
     

    }
  ],
  Overview: [
    {
      name: {
        type: String,
      },
      completed: {
        type: Number,
        default: 0,
      }
      
    }
  ]
})

const taskList = mongoose.model('taskList', taskModel);

module.exports = taskList;