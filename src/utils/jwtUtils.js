const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return reject(err);
            resolve(decoded);
        });
    });
};
