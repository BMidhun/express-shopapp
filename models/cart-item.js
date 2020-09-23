const Sql = require('sequelize');
const psql = require('../config/config');

const CartItemModel = psql.define('cartitem',{
    id:{
        primaryKey:true,
        type:Sql.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    qty :{
        type:Sql.INTEGER
    }
});

module.exports = CartItemModel;