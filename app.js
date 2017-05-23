// var app = function () {
//   var http = require('http');
//   var express = require('express');
//   var app = express();
//   var moment = require('moment'),
//     _ = require('underscore'),
//     path = require('path'),
//     fs = require('fs'),
//     md5 = require('./configs/md5.js'),
//     app = express();

//   app.use(express.static(__dirname + '/public'));
//   app.use(express.static(__dirname + '/configs'));
//   app.use(express.static(__dirname + '/controllers'));
//   app.use(express.static(__dirname + '/node_modules'));
//   app.set('views', __dirname + '/views/controllers');
//   app.engine('html', require('ejs').renderFile);
//   app.get('/', function (req, res) {
//     res.render('post.ejs');
//   });
//   app.locals._ = _;

//   app.locals.formatTime = function (time) {
//     return moment(time).format('MMMM Do YYYY, h:mm a');
//   };
//   var userEmail = 'leqnam@live.com';
//   var userDisplayName = 'CNPM';
//   var userDescription = 'Công nghệ phần mềm';

//   app.locals.hex_md5 = md5.hex_md5;
//   app.locals.userEmail = userEmail;
//   app.locals.userDisplayName = userDisplayName;
//   app.locals.userDescription = userDescription;

//   //app.use('/', postsController);

//   // dynamically include routes (Controller)
//   fs.readdirSync('./controllers').forEach(function (file) {
//     if (file !== 'md5.js') {
//       var api = '/' + file.substr(0, file.lastIndexOf('.'));
//       var url = require('./controllers/' + file);
//       app.use(api, url);
//     }

//   });

//   return app;
// }();

// module.exports = app;
var express = require('express'),
    moment = require('moment'),
    _ = require('underscore'),
    path = require('path'),
    fs = require('fs'),
    md5 = require('./configs/md5.js'),
    app = express();



// The information showed about the poster
var userEmail = 'leqnam@live.com';
var userDisplayName = 'CNPM';
var userDescription = 'Công nghệ phần mềm';

  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/configs'));
  app.use(express.static(__dirname + '/controllers'));
  app.use(express.static(__dirname + '/node_modules'));
  app.use(express.static(__dirname + '/routers'));  
//   app.set('views', __dirname + '/views/controllers');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.locals._ = _;

app.locals.formatTime = function(time) {
    return moment(time).format('MMMM Do YYYY, h:mm a');
};

app.locals.hex_md5 = md5.hex_md5;
app.locals.userEmail = userEmail;
app.locals.userDisplayName = userDisplayName;
app.locals.userDescription = userDescription;

var homeController = require('./routers/home.js');
app.use('/', homeController);

// dynamically include routes (routers)
fs.readdirSync('./routers').forEach(function(file) {
    var api = '/' + file.substr(0, file.lastIndexOf('.'));
    var url = require('./routers/' + file);
    app.use(api, url);

});


//app.get('/home',postsController.index); Old way


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});