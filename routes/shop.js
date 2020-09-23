const express = require('express');
const Router  = express.Router();

const shopController = require('../controllers/shop');

Router.get('/', shopController.getProducts);

Router.get('/cart', shopController.renderCart);

Router.post('/addtocart', shopController.addToCart)


module.exports = Router;