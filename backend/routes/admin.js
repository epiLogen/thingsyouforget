const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config({ path: '../.env'});

router.post('/', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const admin = await User.findOne({ name : username });
    
    
    if(!admin) {
        return res.status(404).send('Wrong username.');
    }

    bcrypt.compare(password, admin.password, function(err, result) {
        if (err) return callback(err);

        if(result) {
            const accessToken = jwt.sign({ username: admin.username }, process.env.ACCESS_TOKEN_SECRET);
            res.json({ token: accessToken });
        } else {
            res.status(404).send('Wrong password.');
        }
    });

});

module.exports = router;