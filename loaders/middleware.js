const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use(express.static(path.join(rootDir,'public')));
    return app;
} 