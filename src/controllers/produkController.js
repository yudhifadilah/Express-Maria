const produkService = require('../services/produkService');

// Controller function to get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await produkService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to create a new product
exports.createProduct = async (req, res) => {
    const { produk_name, categori, price, qty, produk_status, brand } = req.body;
    try {
        const newProductId = await produkService.createProduct(produk_name, categori, price, qty, produk_status, brand);
        res.status(201).json({ id: newProductId, message: "Product created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to update an existing product
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { produk_name, categori, price, qty, produk_status, brand } = req.body;
    try {
        await produkService.updateProduct(id, produk_name, categori, price, qty, produk_status, brand);
        res.json({ message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to delete a product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await produkService.deleteProduct(id);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
