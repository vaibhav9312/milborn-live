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



exports.CateList = function(req, res) {

  
    context.DB_ProductGroup.findAll().then(result => {
        res.status(200).send(result);
       
    }).catch(error => {
        res.status(500).send(error);
        console.log(error);
    })
}

exports.clientType = function(req, res) {
    
      
        context.DB_ClientType.findAll({attributes: ['ClientTypeId', 'ClientType']}).then(result => {
            res.status(200).send(result);
           
        }).catch(error => {
            res.status(500).send(error);
            console.log(error);
        })
    }

    exports.groupList = function(req, res) {
        
          
            context.DB_ProductGroup.findAll().then(result => {
                res.status(200).send(result);
               
            }).catch(error => {
                res.status(500).send(error);
                console.log(error);
            })
        }

        

        exports.subgroupList = function(req, res) {
            
              
                context.DB_ProductSubGroup.findAll({where:{ GroupId: re.query.id }}).then(result => {
                    res.status(200).send(result);
                   
                }).catch(error => {
                    res.status(500).send(error);
                    console.log(error);
                })
            }