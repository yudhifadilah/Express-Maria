const produkModel = require('../models/produkModel');

// Function to get all products
exports.getAllProducts = async () => {
    return await produkModel.getAllProducts();
};

// Function to create a new product
exports.createProduct = async (produk_name, categori, price, qty, produk_status, brand) => {
    return await produkModel.createProduct(produk_name, categori, price, qty, produk_status, brand);
};

// Function to update an existing product
exports.updateProduct = async (id, produk_name, categori, price, qty, produk_status, brand) => {
    await produkModel.updateProduct(id, produk_name, categori, price, qty, produk_status, brand);
};

// Function to delete a product
exports.deleteProduct = async (id) => {
    await produkModel.deleteProduct(id);
};
