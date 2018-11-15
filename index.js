var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var homeController = require('./controllers/homeController');
var setupController = require('./controllers/setupController');


var port = process.env.PORT || 4002;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'vash');

console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString(),{useNewUrlParser: true}, function(err){
    if(err)
    {
        console.log(err);
        
        throw err;
    }
    //5fKUDJxe7BQzUkh
});
homeController(app);
setupController(app);
app.listen(port);
//