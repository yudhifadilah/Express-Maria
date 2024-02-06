const userService = require('../services/userService');
const bcrypt = require('bcryptjs');

exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserByUsername = async (req, res) => {
    try {
        const user = await userService.getUserByUsername(req.params.username);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Hashing password sebelum menyimpannya
        const hashedPassword = await bcrypt.hash(password, 10);
        // Memanggil fungsi createUser dari userService
        const result = await userService.createUser(username, hashedPassword);
        // Memberikan respons ke klien
        res.status(201).json({ message: 'User created successfully', result });
    } catch (error) {
        // Tangani kesalahan jika operasi penyimpanan gagal
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;
    try {
        await userService.updateUser(id, username, password);
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userService.deleteUser(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
