const Sql = require('sequelize');
const psql = require('../config/config');

const CartModel = psql.define('cart',{
    id:{
        primaryKey:true,
        type:Sql.INTEGER,
        autoIncrement:true,
        allowNull:false
    }
});

module.exports = CartModel;