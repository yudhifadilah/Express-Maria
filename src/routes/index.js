const express = require('express');
const authRoutes = require('./authRoutes');
const dataRoutes = require('./dataRoutes');
const userRoutes = require('./userRoutes');
const produkRoutes = require('./produkRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/data', dataRoutes);    
router.use('/user', userRoutes);
router.use('/p', produkRoutes);


module.exports = router;
