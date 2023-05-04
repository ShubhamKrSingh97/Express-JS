
const db=require('../util/database');

module.exports = class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    storeData() {
       return db.execute('Insert into productDetails(name,size)values(?,?)',[this.title,this.price]);
    }

};
