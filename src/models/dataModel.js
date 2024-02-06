const db = require('../utils/db');

exports.getAllData = async () => {
    const [rows] = await db.query('SELECT * FROM data');
    return rows;
};

exports.createData = async (name, value) => {
    const [result] = await db.query('INSERT INTO data (name, value) VALUES (?, ?)', [name, value]);
    return result.insertId;
};

exports.updateData = async (id, name, value) => {
    await db.query('UPDATE data SET name = ?, value = ? WHERE id = ?', [name, value, id]);
};

exports.deleteData = async (id) => {
    await db.query('DELETE FROM data WHERE id = ?', [id]);
};
