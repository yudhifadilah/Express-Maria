const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');

// GET all products
router.get('/', produkController.getAllProducts);

// POST a new product
router.post('/', produkController.createProduct);

// PUT update a product
router.put('/:id', produkController.updateProduct);

// DELETE a product
router.delete('/:id', produkController.deleteProduct);

module.exports = router;
