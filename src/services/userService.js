// services/userService.js
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.getUserById = async (id) => {
    return await userModel.getUserById(id);
};

exports.getUserByUsername = async (username) => {
    return await userModel.getUserByUsername(username);
};

exports.createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userModel.createUser(username, hashedPassword);
};

exports.updateUser = async (id, username, password) => {
    // Hash password jika ada
    if (password) {
        password = await bcrypt.hash(password, 10);
    }
    return await userModel.updateUser(id, username, password);
};

exports.deleteUser = async (id) => {
    return await userModel.deleteUser(id);
};
