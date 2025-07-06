const mongoose = require('mongoose');
const { Schema } = mongoose;


const filefolder = new Schema({
    name: {
        type: String,
        required: true
    },
    fileUrls: [{
        type: String
    }],
}, {
    timestamps: true
})


const FileFolder = mongoose.model('FileFolder', filefolder);

module.exports = FileFolder;