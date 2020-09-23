const { PageNotFound } = require('../controllers/error');
const product   = require('../routes/product');
const shop      = require('../routes/shop');


module.exports = (app) => {
    app.use('/product',product); // implies request api route will have the following format /product/
    app.use('/shop',shop);       // implies request api route will have the following format /shop/

    app.use(PageNotFound);
//  If user enters a non-existing page in browser URL.

    return app;
}