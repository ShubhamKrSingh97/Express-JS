const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`<html><h1>Add Product</h1><form action='/admin/add-product' method="POST"><input type='text' name='title'></input><input type='text' name='size'></input><button type='submit'>Add</button></form></html>`);
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
})

module.exports = router;