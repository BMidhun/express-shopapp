const {Sequelize} = require('sequelize');
const env_var = require('dotenv').config();



if(env_var.error) {
    console.log(env_var.error);
}

// const psql  = new Sequelize('postgres://postgres:nuhdiM@007@localhost:5432/shopfest');

// ------------ OR ----------------------

const psql  = new Sequelize(
            process.env.PSQL_DB,process.env.PSQL_USER,process.env.PSQL_PASSWORD,
            {
                dialect:'postgres',
                host:process.env.PSQL_HOST
            })

psql.authenticate({logging:false})
 .then(() => {
 console.log('DB Connected Successfully!')
 })
 .catch((err) =>{
 console.log('DB Connection Failed!')
 });


module.exports = psql;