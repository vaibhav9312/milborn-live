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

    return webrouter;
};

module.exports = router;