var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
var { user_google_client_id, user_google_client_secret, admin_google_client_id, admin_google_client_secret } = require("./config");
var User  = require("../models/userModel");
var Admin  = require("../models/adminModel");
const mongoose = require('mongoose');

passport.use('google-admin', new GoogleStrategy({
    clientID: admin_google_client_id,
    clientSecret: admin_google_client_secret,
    callbackURL: `${process.env.BACKEND_URL}/auth/admin/google/callback`
},
    async (accessToken, refreshToken, profile, cb) => {
        try {
            let user = await Admin.findOneAndUpdate({ googleId: profile.id }, {isLoggedIn: true});
            if (!user) {
                user = new Admin({
                    username: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value,
                    isVerified: true,
                    isLoggedIn: true
                });
                await user.save();
            }
            return cb(null, user);
        } catch (e) {
            return cb(e, null);
        }
    }
));


passport.use('google-user', new GoogleStrategy({
    clientID: user_google_client_id,
    clientSecret: user_google_client_secret,
    callbackURL: `${process.env.BACKEND_URL}/auth/user/google/callback`
},
    async (accessToken, refreshToken, profile, cb) => {
        try {
            let user = await User.findOneAndUpdate({ googleId: profile.id }, {isLoggedIn: true});
            if (!user) {
                user = new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value,
                    isVerified: true,
                    isLoggedIn: true
                });
                await user.save();
            }
            return cb(null, user);
        } catch (e) {
            return cb(e, null);
        }
    }
));