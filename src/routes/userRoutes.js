const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users/:id
router.get('/:id', userController.getUserById);

// POST /users/regist
router.post('/regist', userController.createUser);

// PUT /users/:id
router.put('/:id', userController.updateUser);

// DELETE /users/:id
router.delete('/:id', userController.deleteUser);

module.exports = router;
