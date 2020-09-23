const Sql = require('sequelize');

const psql = require('../config/config');

const productmodelattributes = {
    pid:{
      type : Sql.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true       
    },
    pname: Sql.STRING,
    price: {
        type:Sql.DOUBLE,
        allowNull:false
    },
    purl : Sql.STRING,
    pdescription: Sql.STRING
}

const ProductModel = psql.define('product',productmodelattributes,{});

module.exports = ProductModel;