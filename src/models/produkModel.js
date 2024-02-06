const db = require('../utils/db');

// Function to get all products from the database
exports.getAllProducts = async () => {
    const [rows] = await db.query('SELECT * FROM produk');
    return rows;
};

// Function to create a new product in the database
exports.createProduct = async (produk_name, categori, price, qty, produk_status, brand) => {
    const [result] = await db.query('INSERT INTO produk (produk_name, categori, price, qty, produk_status, brand) VALUES (?, ?, ?, ?, ?, ?)', [produk_name, categori, price, qty, produk_status, brand]);
    return result.insertId;
};

// Function to update an existing product in the database
exports.updateProduct = async (id, produk_name, categori, price, qty, produk_status, brand) => {
    await db.query('UPDATE produk SET produk_name = ?, categori = ?, price = ?, qty = ?, produk_status = ?, brand = ? WHERE id = ?', [produk_name, categori, price, qty, produk_status, brand, id]);
};

// Function to delete a product from the database
exports.deleteProduct = async (id) => {
    await db.query('DELETE FROM produk WHERE id = ?', [id]);
};
