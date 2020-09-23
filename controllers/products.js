
const Product = require('../services/product');

const path  = require('path');

const rootDir = require('../utils/path');

exports.getProductById =  async (req,res,next) => {

  const product = await Product.getProductById(req);
  product ? res.render('product/product-detail',{pageTitle:'Product', product})
            :
           res.sendFile(path.join(rootDir,'views','404.html'));

}

exports.addProductPage = async (req,res,next) => {
    const isEdit = Boolean(req.query.edit);
    if(!isEdit)
        res.render('product/addproductform',{pageTitle:'Add Products',path:'/product/add-product',isEdit});
    else
        {
            const product = await Product.getProductById(req);
            product ? res.render('product/addproductform',{pageTitle:'Edit Product',path:'/product/add-product', product,isEdit})
                    : res.sendFile(path.join(rootDir,'views','404.html'));
        }
}

exports.registerProduct =  async (req,res,next) => {
    
    const response = await Product.postProduct(req);   
    console.log(response);
    response ? res.redirect('/shop') : res.redirect('/product/add-product');
}


exports.adminProductPage = async (req,res,next) => {

   const products = await Product.getProducts(req);

   products ? res.render('shop/product-list',{pageTitle:'Shop Now!',path:'/product/admin',products,isAdmin:true}) 
              :
              res.sendFile(path.join(rootDir,'views','404.html')); 
}


exports.updateProduct = async (req,res,next) => {

    const response = await Product.updateProduct(req);
    response ? res.redirect('/product/admin') 
             : res.sendFile(path.join(rootDir,'views','404.html')); 
}

exports.deleteProduct = async (req,res,next) => {
   const response = await Product.deleteProduct(req);
   response ? res.redirect('/product/admin')
            : res.sendFile(path.join(rootDir,'views','404.html')); 
}




