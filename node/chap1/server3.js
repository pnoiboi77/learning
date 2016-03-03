var connect = require('connect');
var http = require('http');

var app = connect().
  use(function(req, res) {
    res.end('Hello from connect!');
  });

  http.createServer(app).listen(3002);
