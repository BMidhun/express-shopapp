// const http = require('http');
const express = require('express');
const psql = require('./config/config');

const loader    = require('./loaders/index')

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');


let app = express();
// returns an express server OR
// const server = http.createServer(app);
// server.listen(3001); 

app.use((req,res,next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user
            next();
        })
        .catch(err => console.log(err))
});

app = loader(app);




Product.belongsTo(User,{constraints:true, onDelete:'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart); // OR  Cart.belongsTo(User)

Cart.belongsToMany(Product,{through:CartItem});
Product.belongsToMany(Cart,{through:CartItem});


// CartItem.hasMany(Product,{through: Cart});
// Product.belongsTo(CartItem)


const SyncDB = () => {
    // psql.sync({force:true})
   psql.sync({logging:false})
   .then(result => {
       User.findByPk(1)
           .then(user => {
               if(!user)
                   User.create({name:'Midhun',email:'midhun@1323.com'})
                        .then(user => {
                            user.createCart();
                        })      
                        .catch(err => {console.log(err)});
                else
                    console.log('User Exists');         
           })
           .catch(err => console.log(err))
   }).catch(err => console.log(err));
}

SyncDB();


app.listen(3001,(err)=>{
    err ? console.log('Server failed!') : console.log('Server running on port 3001');
});