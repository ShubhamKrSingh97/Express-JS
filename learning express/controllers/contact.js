const path = require('path');
const rootDir = require('../util/path');


const contactController=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}

module.exports=contactController;