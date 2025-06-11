const products =[]
module.exports = class Product {
    constructor(title){
        this.title = title

    }
    save(){
        products.push(this)
    }
    static fetchAll(){     /// Static >>> used to call the method on the class no the object 
        return products
    }

}