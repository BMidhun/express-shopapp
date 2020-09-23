const Product = require('../models/product');


class ProductService {

    static async postProduct(req) {
        try {
            console.log(req.user)
            const result = await Product.create({
                 pname : req.body.pname,
                 price : req.body.price,
                 purl  : req.body.purl,
                 pdescription : req.body.pdescription,
                 userId : req.user.id
             });
            return result ? true : false;     
         } catch (error) { return false }
    }

    static async getProductById(req) {
        try {    
            const pid = parseInt(req.params.id);
            const result = await Product.findByPk(pid);
            return result ? result : false;
        } catch (error) { return false}
    }

    static async getProducts(req) {
        try {
            const result = await Product.findAll();
            return result ? result : false;          
        } catch (error) { return false}
    }

    static async updateProduct(req) {
        try {

           const pid = parseInt(req.body.productid);
           const product = await Product.update({
                pname: req.body.pname,
                price: req.body.price,
                purl : req.body.purl,
                pdescription : req.body.pdescription,
                updatedAt: new Date()
            },{where : {
                pid 
            }})

            const updatedCount = product[0];

            return updatedCount ? true : false;

        } catch (error) { console.log(error); return false;}
    }

    static async deleteProduct(req){
        try {     
           const pid = parseInt(req.body.productid);
        //    const product = await Product.destroy({where:{
        //         pid
        //     }});
        // return product ? true : false;
        // OR
        
        const product = await Product.findByPk(pid);
        return product.destroy() ? true : false
            

        } catch (error) {console.log(error); return false}
    }

}


module.exports = ProductService;