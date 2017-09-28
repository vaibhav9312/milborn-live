var bodyParser = require('body-parser');
var crypto = require('crypto');
var lsconfig = require('../routes/config');
var jwt = require('jsonwebtoken');
var Cookies = require("cookies");
var async = require('async');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var context = require('../models/entities.js')();
var commonFunc = require('../routes/commonFunction');
var Sequelize = require('sequelize');



exports.productList = function(req, res) {

    // let queryObj = { include: ['DB_ProductType'] };
   

    context.DB_Products.findAll().then(result => {
        res.status(200).send(result);
    }).catch(error => {
        res.status(500).send(error);
        console.log(error);
    })
}

