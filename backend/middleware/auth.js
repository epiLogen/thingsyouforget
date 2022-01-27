const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env'});

const auth = (req, res, next) => {
    console.log(req.headers);
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.status(401).send('Missing token.');

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, admin) => {
        if(err) return res.status(403).send('Invalid token.');
        req.username = admin;
        next();
    });
}

module.exports = auth;