var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var server = http.createServer(function onRequest(req, resp) {
  var urlParts = url.parse(req.url);
  var page = 'pages' +urlParts.pathname;

  fs.exists(page, function fileExists(exists) {
    if (exists) {
      resp.writeHead(200,{'Content-Type': 'text/plain'});
      fs.createReadStream(page).pipe(resp);
    } else {
      resp.write('Page Not Found');
      resp.end();
    }
  });
}).listen(3001);
