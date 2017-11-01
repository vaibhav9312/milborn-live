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
                                
                                
                                    context.DB_Products.findAll({attributes: ['ProductId','ProductTitle','ProductImage', 'Price','GroupId','SubGroupId','CategoryId','SubCategoryId'],where:{ SubGroupId: req.query.id }}).then(result => {
                                        
                                        res.status(200).send(result);
                                       
                                    }).catch(error => {
                                        res.status(500).send(error);
                                        console.log(error);
                                    })
                                }

                                exports.cateProduct = function(req, res) {
                                    
                                    
                                        context.DB_Products.findAll({attributes: ['ProductId','ProductTitle','ProductImage', 'Price','GroupId','SubGroupId','CategoryId','SubCategoryId'],where:{ CategoryId: req.query.id }}).then(result => {
                                            
                                            res.status(200).send(result);
                                           
                                        }).catch(error => {
                                            res.status(500).send(error);
                                            console.log(error);
                                        })
                                    }

                                    exports.allproducts = function(req, res) {
                                        
                                        
                                            context.DB_Products.findAll({attributes: ['ProductId','ProductTitle']}).then(result => {
                                                
                                                res.status(200).send(result);
                                               
                                            }).catch(error => {
                                                res.status(500).send(error);
                                                console.log(error);
                                            })
                                        }
                                       

                                        exports.product = function(req, res) {
                                            
                                            
                                                context.DB_Products.findAll({where:{Productid:req.query.id}}).then(result => {
                                                    
                                                    res.status(200).send(result);
                                                   
                                                }).catch(error => {
                                                    res.status(500).send(error);
                                                    console.log(error);
                                                })
                                            }

                                            exports.searchList = function(req, res) {
                                                var list=[];
                                                var a=0;
                                              
                                                // sequelize.query("SELECT a.GroupId,a.Group,b.SubGroupId,b.SubGroup,b.GroupId,c.CategoryId,c.CategoryName,c.SubGroupId,d.SubCategoryId,d.SubCategory,d.CategoryId,e.ProductId,e.ProductTitle FROM DB_ProductGroup As a,DB_ProductSubGroup As b,DB_Category As c,DB_ProductSubCategory As d,DB_Products As e ", { type: Sequelize.QueryTypes.SELECT }).then(result => {
                                                //         console.log(result);
                                                //                // resolve({ "status": 200, "msg": result[0].maxClientId == null ? 0 : result[0].maxClientId });
                                                //             }).catch(err => {
                                                    
                                                //                 reject({ "status": 500, "msg": err });
                                                //             })
                                            //    console.log(lists);
                                                   
                                            //         if(lists.length>0){
                                            //             res.send(lists);
                                            //              }

                                            context.DB_Products.findAll({attributes:['ProductTitle','ProductId']}).then(result => {
                                                list.push(result); 
                                               
                                            a++;
                                            if(a==5){
                                                res.status(200).send(list);
                                                
                                            }
                                           }).catch(error => {
                                                    
                                                console.log(error);
                                                  });
                                                  context.DB_ProductGroup.findAll({attributes:['GroupId','Group']}).then(result => {
                                                  list.push(result);
                                                  a++;
                                                  if(a==5){
                                                    res.status(200).send(list);
                                                   
                                                }
                                                    }).catch(error => {
                                                    console.log(error);
                                                  
                                                      });
                                                      context.DB_ProductSubGroup.findAll({attributes:['SubGroupId','SubGroup','GroupId']}).then(result => {
                                                        list.push(result);
                                                        a++;
                                                        if(a==5){
                                                            res.status(200).send(list);
                                                           
                                                        }
                                                        }).catch(error => {
                                                        console.log(error);
                                                       
                                                          });
                                                          context.DB_Category.findAll({attributes:['CategoryId','CategoryName','SubGroupId']}).then(result => {
                                                            list.push(result);
                                                            a++;
                                                            if(a==5){
                                                                res.status(200).send(list);
                                                               
                                                            }
                                                              }).catch(error => {
                                                              console.log(error);
                                                             
                                                                });
                                                                context.DB_ProductSubCategory.findAll({attributes:['SubCategoryId','SubCategory','CategoryId']}).then(result => {
                                                                    list.push(result);
                                                                    a++;
                                                                    if(a==5){
                                                                        res.status(200).send(list);
                                                                       
                                                                    }
                                                            }).catch(error => {
                                                                console.log(error);
                                                              });
                                                             
                                                                
                                                }
 
                                                exports.groupproducts = function(req, res) {
                                                    
                                                    
                                                        context.DB_Products.findAll({where:{ GroupId: req.query.id }}).then(result => {
                                                            
                                                            res.status(200).send(result);
                                                           
                                                        }).catch(error => {
                                                            res.status(500).send(error);
                                                            console.log(error);
                                                        })
                                                    }

                                                    
                                                     
                            exports.subcateproducts = function(req, res) {
                                
                                
                                    context.DB_Products.findAll({where:{ SubCategoryId: req.query.id }}).then(result => {
                                        
                                        res.status(200).send(result);
                                       
                                    }).catch(error => {
                                        res.status(500).send(error);
                                        console.log(error);
                                    })
                                }

 exports.allsubgroup = function(req, res) {
                                
                                
                                    context.DB_ProductSubGroup.findAll().then(result => {
                                        
                                        res.status(200).send(result);
                                       
                                    }).catch(error => {
                                        res.status(500).send(error);
                                        console.log(error);
                                    })
                                }


 exports.allcategory = function(req, res) {
                                
                                
                                    context.DB_Category.findAll().then(result => {
                                        
                                        res.status(200).send(result);
                                       
                                    }).catch(error => {
                                        res.status(500).send(error);
                                        console.log(error);
                                    })
                                }


 exports.allsubcategory = function(req, res) {
                                
                                
                                    context.DB_ProductSubCategory.findAll().then(result => {
                                        
                                        res.status(200).send(result);
                                       
                                    }).catch(error => {
                                        res.status(500).send(error);
                                        console.log(error);
                                    })
                                }


//------------------------------layout------------



exports.allbanners = function(req, res) {
    
    
        context.DB_Positions.findAll({where:{ Position: "Banner" }}).then(result => {
            
            res.status(200).send(result);
           
        }).catch(error => {
            res.status(500).send(error);
            console.log(error);
        })
    }