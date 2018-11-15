var configValues = require('./config');

module.exports = {
    getDbConnectionString : function(){
        return 'mongodb://'+configValues.username +':'+configValues.password +
        '@ds255463.mlab.com:55463/nodetodo';
    }
}
///