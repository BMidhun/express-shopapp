const Product = require('../services/product');
const Cart = require('../models/cart');

const path = require('path');

exports.getProducts = async (req,res,next) => {

    const products = await Product.getProducts(req);

    products ? res.render('shop/product-list',{pageTitle:'Shop Now!',path:'/shop/',products,isAdmin:false})
             : res.sendFile(path.join(__dirname,'views','404.html'));

}

exports.addToCart = (req,res,next) => {

    const cb = (data) => {
        data ?  res.redirect('/shop') :  res.sendFile(path.join(__dirname,'views','404.html'));
    }
    Cart.addToCart(req.body.productid,cb)
}

exports.renderCart = (req,res,next) => {
    const cartitems = [{
        pname: "FIFA 21 (PS4)",
        price: 35,
        purl: "https://www.fifplay.com/img/public/fifa-21-cover-champions-edition.jpg",
        qty: 2
    }]
    res.render('cart/cart',{pageTitle:'Your Cart',path:'/cart', totalamount:70, cartitems});
}