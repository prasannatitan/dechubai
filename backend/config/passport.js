var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
var { google_client_id, google_client_secret } = require("./config");
var { User } = require("../models/userModel");

passport.use(new GoogleStrategy({
    clientID: google_client_id,
    clientSecret: google_client_secret,
    callbackURL: "/auth/google/callback"
},
    async (accessToken, refreshToken, profile, cb) => {
        try {
            let user = await User.findOneAndUpdate({ googleId: profile.id });
            if (!user) {
                user = new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value,
                    isVerified: true
                });
                await user.save();
            }
            return cb(null, user);
        } catch (e) {
            return cb(e, null);
        }
    }
));