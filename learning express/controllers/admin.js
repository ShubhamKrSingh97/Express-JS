const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/product');

const adminGetController = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

const adminPostController = (req, res, next) => {
    const obj = new Product(req.body.title, req.body.size);
    obj.storeData().then(result => {
        res.redirect('/shop');
    });
}

module.exports = { adminGetController, adminPostController };