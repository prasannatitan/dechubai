const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../models/userModel');
const {isAuthenticated} = require('../Middleware/passportAuthMideel');
const { logoutUser } = require('../controller/userController');


router.get('/google', passport.authenticate('google-user', { scope: ['profile', 'email'] }));

router.get('/google/callback',

    passport.authenticate('google-user', { session: false }),
    (req, res) => {
        try {
            const token = jwt.sign({ id: req.user._id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: '2d' });
            res.redirect(`${process.env.CLIENT_URL}/auth-success?token=${token}`);
        } catch (err) {
            console.error(err);
            res.redirect(`${process.env.CLIENT_URL}/login?error=google_failure`);
        }
    }

)
router.get("/verify", isAuthenticated, async (req, res) => {
    res.json({
        success: true,
        user: req.user
    })
 })

router.post('/logout',isAuthenticated, logoutUser)

module.exports = router;