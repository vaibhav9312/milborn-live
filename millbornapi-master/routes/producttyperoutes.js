var express = require('express');
var prorouter = express.Router();
var bodyParser = require('body-parser');
//const clienttypecontroller = require("../controllers/clienttype.server.controller");
const productmngmtcontroller = require("../controllers/productmngmt.server.controller.js");

var router = function() {
    prorouter.route('/product/list')
        .get(function(req, res) {
            return productmngmtcontroller.productList(req, res);
        });

    


    return prorouter;
};

module.exports = router;