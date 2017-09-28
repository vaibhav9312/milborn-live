var Sequelize = require('sequelize');
let env = process.env.NODE_ENV || "dev";
var sequelize = "";



if (env == "dev") {
    sequelize = new Sequelize('millborn_v001', 'millborn', 'mb@123', {
        host: "bamboo.arvixe.com",
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            timeout: 3000
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: '+05:30'
    });
} else {
    sequelize = new Sequelize('millborn_v001', 'millborn', 'mb@123', {
        host: "bamboo.arvixe.com",
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            timeout: 3000
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: '+05:30'
    });
}


module.exports.sequelizeConfig = sequelize;