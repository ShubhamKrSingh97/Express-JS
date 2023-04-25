const path = require('path');
const rootDir = require('../util/path');
const Product = require('../modules/product');

const adminGetController = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

const adminPostController = (req, res, next) => {
    const obj = new Product(req.body.title, req.body.size);
    obj.storeData();
    //  console.log( Product.fetchAll());
    res.redirect('/shop');
}

module.exports = { adminGetController, adminPostController };