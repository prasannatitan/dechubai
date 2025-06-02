const { validationResult } = require('express-validator')
const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const BlacklistToken = require('../models/blacklistToken.model')

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({ success:false, message: errors.array()?.[0]?.msg || 'Validation error'})
        
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.json({success:false, message: 'User already exist' });
    }

    const hashedPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })

    const token = user.generateAuthToken();
console.log(user)
    res.json({success:true, token, user })
}

module.exports.loginUser = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.json({ success:false, message: error.array()?.[0]?.msg || 'Validation error'})
    }
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.json({success: false, message: "invalid email or password" })
    }
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.json({success:false, message: 'Invalid email or password' });
    }
    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.json({success:true, token, user })

}

module.exports.getUserprofile = async(req, res, next) => {
        res.status(200).json(req.user);
}

module.exports.logoutUser = async(req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await BlacklistToken.create({token});
    console.log('here')
    res.status(200).json({message: 'logged out'});
}