const fs = require('fs');

const getDataFromFile = cb => {
    let data = [];
    try {
        cb(data = require('../storage/data.json'));
    }
    catch (err) {
        cb(data);
    }

};
module.exports = class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    storeData() {
        getDataFromFile(products => {
            products.push(this);
            fs.writeFile('./storage/data.json', JSON.stringify(products), (err) => {
                if (err) { }

            });
        });
    }
    static fetchAll(cb) {
        getDataFromFile(cb);
    }
};
