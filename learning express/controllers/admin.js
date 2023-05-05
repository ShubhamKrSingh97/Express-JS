const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/product');

const adminGetController = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

const adminPostController = (req, res, next) => {
    Product.create({
        name:req.body.title,
        size:req.body.size,
    }).then(res.redirect('/'));
}

module.exports = { adminGetController, adminPostController };