var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var homeController = require('./controllers/homeController');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 4002;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'vash');

mongoose.connect(config.getDbConnectionString(),{useNewUrlParser: true}, function(err){
    if(err)
    {
        console.log(err);     
        throw err;
    }
});

//make express app aware of endpoints
homeController(app);
setupController(app);
apiController(app);

app.listen(port);
