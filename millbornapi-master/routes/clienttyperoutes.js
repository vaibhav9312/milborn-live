var express = require('express');
var apirouter = express.Router();
var bodyParser = require('body-parser');
const clienttypecontroller = require("../controllers/clienttype.server.controller");
const clientmngmtcontroller = require("../controllers/clientmngmt.server.controller");
var accountCtrl = require('../controllers/account.server.controller');

var router = function() {

    apirouter.route('/')
        .get(function(req, res) {
            res.send("hi");
        });

    apirouter.route('/list')
        .get(function(req, res) {
            return clienttypecontroller.list(req, res);
        });

    apirouter.route('/create')
        .post(function(req, res) {
            return clienttypecontroller.create(req, res);
        });

    apirouter.route('/update/:id')
        .put(function(req, res) {
            return clienttypecontroller.update(req, res);
        });

    apirouter.route('/delete/:id')
        .delete(function(req, res) {
            return clienttypecontroller.delete(req, res);
        });

    apirouter.route('/client/create')
        .post(function(req, res) {
            console.log('lol');
            return clientmngmtcontroller.createClient(req, res);
        });
        apirouter.route('/client/Addcreate')
        .post(function(req, res) {
            console.log('lol');
            return clientmngmtcontroller.createClient(req, res);
        });

    apirouter.route('/client/list')
        .get(function(req, res) {
            return clientmngmtcontroller.clientList(req, res);
        });

    apirouter.route('/client/details/:id')
        .get(function(req, res) {
            return clientmngmtcontroller.clientDetails(req, res);
        });
       
        apirouter.route('/login')
        .post(function(req, res) {
            return accountCtrl.doLogin(req, res);
        });

    return apirouter;
};

module.exports = router;