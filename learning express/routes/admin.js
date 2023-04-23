const express = require('express');
const router = express.Router();
const adminController=require('../controllers/admin');

router.get('/add-product',adminController.adminGetController);

router.post('/add-product',adminController.adminPostController )

module.exports = router;