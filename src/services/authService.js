const userModel = require('../models/userModel');
const jwtUtils = require('../utils/jwtUtils');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.login = async (username, password) => {
    const user = await userModel.getUserByUsername(username);
    if (!user) throw new Error('User not found');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Authentication failed');

    return jwtUtils.generateToken({ username: user.username });
};
