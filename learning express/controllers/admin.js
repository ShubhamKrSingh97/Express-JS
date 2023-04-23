const path = require('path');
const rootDir = require('../util/path');

const adminGetController=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

const adminPostController=(req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
}

module.exports={adminGetController,adminPostController};