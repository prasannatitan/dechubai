const admin = require("firebase-admin");
const express = require("express");
const router = express.Router();
const {isAuthenticated} = require("../Middleware/passportAuthMideel");

const taskModel = require("../models/ProjectModel");



// In your Express route handler
router.get("/protected-data",isAuthenticated, async (req, res) => {
    const email = req.user.email;
    
    const projectData = await taskModel.find({ for: email });
    if (!projectData || projectData.length === 0) {
        return res.status(200).json({ data: "No data available" });
    }
    res.json({ projectData });
});


module.exports = router;