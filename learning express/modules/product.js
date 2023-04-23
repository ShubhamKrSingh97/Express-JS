const product=[];
module.exports= class Product{
    constructor(title,price){
        this.title=title;
        this.price=price;
    }
    save(){
        product.push(this);
    }
    fetchAll(){
        return product;
    }
}