const db = require('../utils/db');
const bcrypt = require('bcryptjs'); // Tambahkan impor modul bcryptjs

exports.getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

exports.getUserByUsername = async (username) => {
    const [rows] = await db.query('SELECT * FROM user WHERE username = ?', [username]);
    return rows[0];
};

exports.createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, hashedPassword]);
    return result.insertId;
};

exports.updateUser = async (id, username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('UPDATE user SET username = ?, password = ? WHERE id = ?', [username, hashedPassword, id]);
};

exports.deleteUser = async (id) => {
    await db.query('DELETE FROM user WHERE id = ?', [id]);
};
