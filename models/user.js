const Sql = require('sequelize');
const psql = require('../config/config');

const UserModel = psql.define('user',{
    id:{
        type:Sql.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name : Sql.STRING,
    email : Sql.STRING
})

module.exports = UserModel