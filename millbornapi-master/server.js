var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3030;
var cors = require('cors');
const commonfunc = require('./routes/commonFunction');
var path = require('path');

app.use(cors());
app.options('*', cors());
app.use(express.static('dist'));

var sequelize = require('./sequelizeConfig').sequelizeConfig;
var entities = require('./models/entities.js')();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var accountRouter = require('./routes/accountroutes')();
app.use('/api/account', accountRouter);

var clientTypeRouter = require('./routes/clienttyperoutes')();
app.use('/api/clienttype/', clientTypeRouter);
app.use('/api/clientmng/', clientTypeRouter);

var productTypeRouter=require('./routes/producttyperoutes')();
app.use('/api/productmng/',commonfunc.isAuthenticate,productTypeRouter);

var apiroutes = require('./routes/apiroutes')();
app.use('/api/generic/', apiroutes);

var apirouter = require('./routes/apiroutes')();
app.use('/api', apirouter);

app.post('/registration',function(req,res){
console.log(req.body);
});

//----------------------WEB/Mob Routes-----------------------
var webRoutes=require('./routes/webroutes')();
app.use('/web/',webRoutes);

//app.get('//',webRoutes);

app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(port, function(err) {
            if (err) console.log(err);

            console.log('running server on port ' + port);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });