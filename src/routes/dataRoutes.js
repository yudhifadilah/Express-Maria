const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authenticateToken, dataController.getAllData);

module.exports = router;
