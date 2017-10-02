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

  
    context.DB_Category.findAll({attributes: ['CategoryId', 'CategoryName','SubGroupId'],where:{SubGroupId:req.query.id}}).then(result => {
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
            
              
                context.DB_ProductSubGroup.findAll({where:{ GroupId: req.query.id }}).then(result => {
                    res.status(200).send(result);
                   
                }).catch(error => {
                    res.status(500).send(error);
                    console.log(error);
                })
            }

            exports.productlist = function(req, res) {
                
                  
                    context.DB_Products.findAll({where:{ CategoryId: req.query.cate }}).then(result => {
                        res.status(200).send(result);
                       
                    }).catch(error => {
                        res.status(500).send(error);
                        console.log(error);
                    })
                }

                // exports.createclient = function(req, res) {
                    
                //       console.log(req.body);
                //         context.DB_Clients.insert({where:{ CategoryId: req.query.cate }}).then(result => {
                //             res.status(200).send(result);
                           
                //         }).catch(error => {
                //             res.status(500).send(error);
                //             console.log(error);
                //         })
                //     }

                    exports.mainitem = function(req, res) {
                        
                          
                            context.DB_ClientMainItems.findAll({where:{ ClientTypeId: req.query.id }}).then(result => {
                                res.status(200).send(result);
                               
                            }).catch(error => {
                                res.status(500).send(error);
                                console.log(error);
                            })
                        }

                        exports.subcateList = function(req, res) {
                            
                             
                                context.DB_ProductSubCategory.findAll({where:{ CategoryId: req.query.id }}).then(result => {
                                    res.status(200).send(result);
                                   
                                }).catch(error => {
                                    res.status(500).send(error);
                                    console.log(error);
                                })
                            }
                            
                            exports.subproducts = function(req, res) {
                                
                                
                                    context.DB_Products.findAll({attributes: ['ProductId','ProductTitle', 'Price'],where:{ SubGroupId: req.query.id }}).then(result => {
                                        
                                        res.status(200).send(result);
                                       
                                    }).catch(error => {
                                        res.status(500).send(error);
                                        console.log(error);
                                    })
                                }

                                exports.cateProduct = function(req, res) {
                                    
                                    
                                        context.DB_Products.findAll({attributes: ['ProductId','ProductTitle', 'Price'],where:{ CategoryId: req.query.id }}).then(result => {
                                            
                                            res.status(200).send(result);
                                           
                                        }).catch(error => {
                                            res.status(500).send(error);
                                            console.log(error);
                                        })
                                    }