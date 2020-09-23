const express = require('express');
const Router  = express.Router();
const Product = require('../controllers/products');

Router.use('/add-product', Product.addProductPage);
Router.use('/admin',Product.adminProductPage);

Router.post('/postproduct', Product.registerProduct);
Router.post('/editproduct', Product.updateProduct);
Router.post('/delete-product', Product.deleteProduct);

Router.get('/edit-product/:id',Product.addProductPage);
Router.get('/:id', Product.getProductById);





module.exports = Router;