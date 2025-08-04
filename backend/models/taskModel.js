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
    required: true,
    uniqe: true
  },
  progress: {
    type: Number,
    required: true
  },
  Statistics: [{
        completed: {
          type: Number,
          default: 0
        },
        Underprogress: {
          type: Number,
          default: 0
        },
        needsRevision: {
          type: Number,
          default: 0
        },
        WorkLeft: {
          type: Number,
          default: 0
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
        enum: ['Revision', 'Approved', 'N/A'],
        default: 'N/A'
      }
    }
  ],
  Overview: [
    {
      name: {
        type: String,
      },
      status: {
        type: Number,
        default: 0,
      },
      date: {
        type: Date,
        default: Date.now
      },
    }
  ],
  hours: [
       Number
  ]
})

const taskList = mongoose.model('taskList', taskModel);

module.exports = taskList;