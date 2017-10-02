var express = require('express');
var webrouter = express.Router();
var bodyParser = require('body-parser');

const webmngmtcontroller = require("../controllers/webmngmt.server.controller.js");

var router = function() {

    webrouter.route('/catelist')
        .get(function(req, res) {
           
            return webmngmtcontroller.CateList(req, res);
        });

    webrouter.route('/clienttype')
    .get(function(req,res){
        
        return webmngmtcontroller.clientType(req,res);
    });

    webrouter.route('/grouplist')
    .get(function(req,res){
        return webmngmtcontroller.groupList(req,res);
    });

    webrouter.route('/subgrouplist')
    .get(function(req,res){
        return webmngmtcontroller.subgroupList(req,res);
    });
    webrouter.route('/products')
    .get(function(req,res){
        return webmngmtcontroller.productlist(req,res);
    });

    webrouter.route('/mainitem')
    .get(function(req,res){
        return webmngmtcontroller.mainitem(req,res);
    });

    webrouter.route('/subcatelist')
    .get(function(req,res){
        return webmngmtcontroller.subcateList(req,res);
    });
    webrouter.route('/subproducts')
    .get(function(req,res){
       
        return webmngmtcontroller.subproducts(req,res);
    });
    webrouter.route('/cateproducts')
    .get(function(req,res){
        console.log('here');
        return webmngmtcontroller.cateProduct(req,res);
    });
    return webrouter;
};

module.exports = router;