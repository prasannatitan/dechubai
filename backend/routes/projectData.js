const admin = require("firebase-admin");
const express = require("express");
const router = express.Router();
const authMiddlware = require("../Middleware/AuthMiddleware");
const taskModel = require("../models/taskModel");



// In your Express route handler
router.get("/protected-data",authMiddlware.AuthMiddleware, async (req, res) => {



   
    const email = req.user.email;
    
    const projectData = await taskModel.find({ for: email });
    res.json({ projectData });

});


module.exports = router;