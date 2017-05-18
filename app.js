var app = function () {
  var http = require('http');
  var express = require('express');
  var app = express();

  app.set('views', __dirname + '/views/pages');
  app.engine('html', require('ejs').renderFile);
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  return app;
}();

module.exports = app;
