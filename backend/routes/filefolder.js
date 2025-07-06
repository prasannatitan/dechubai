const express = require('express');
const FileFolder = require('../models/fileFolder');
const router = express.Router();

router.post('/filefolder', async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.json({sucess:false, message: 'Name is required' });
    }
    const check  = await FileFolder.findOne({ name: name });
    if (check) {
        return res.json({sucess:false, message: 'File folder with this name already exists' });
    }
  const newFileFolder = new FileFolder({
        name: name,
        fileUrls: []
    });

    try {
        await newFileFolder.save();
        return res.json({sucess:true, message: 'File folder created successfully', fileFolder: newFileFolder });
       
    } catch (error) {
        return res.json({sucess:false, message: 'Error creating file folder', error: error.message });
    }
})


router.get('/filefolder', async (req, res) => {
    try {
        const fileFolders = await FileFolder.find();
        return res.json({sucess:true, fileFolders: fileFolders });
    } catch (error) {
        return res.json({sucess:false, message: 'Error fetching file folders', error: error.message });
    }
});

router.put('/filefolder/:id', async (req, res) => {
    const { id } = req.params;
    const { fileUrl } = req.body;
    if (!fileUrl) {
        return res.json({sucess:false, message: 'File URL is required' });
    }
    try {
        const fileFolder = await FileFolder.findById(id);
        if (!fileFolder) {
            return res.json({sucess:false, message: 'File folder not found' });
        }

        fileFolder.fileUrls.push(fileUrl);
        await fileFolder.save();
        return res.json({sucess:true, message: 'File URL added successfully', fileFolder: fileFolder });
    } catch (error) {
        return res.json({sucess:false, message: 'Error updating file folder', error: error.message });
    }
})

router.delete('/filefolder/:name', async (req, res) => {
    const { name } = req.params;

    try {
        const fileFolder = await FileFolder.deleteOne({name: name});

        if (!fileFolder) {
            return res.json({sucess:false, message: 'File folder not found' });
        }
        return res.json({sucess:true, message: 'File folder deleted successfully' });
    } catch (error) {
        return res.json({sucess:false, message: 'Error deleting file folder', error: error.message });
    }
})

module.exports = router;