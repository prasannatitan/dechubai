const mongoose = require('mongoose');
const { Schema } = mongoose;


const TasksRequest = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    for:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    description: {
        type: String,
        
    },
    projectname:{
        type: String,
        required: true
    }
}
)


const TaskRequest = mongoose.model('TaskRequest', TasksRequest);

module.exports = TaskRequest;