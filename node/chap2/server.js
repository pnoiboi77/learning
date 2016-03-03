var http = require('http');
var fs = require('fs');

var server = http.createServer(function onRequest(req, resp) {
  function sendData(data) {
    resp.setHeader('Content-Type', 'application/json');
    resp.write(JSON.stringify({data: data}, null, 3));
    console.log('Sending data to web page');
  }

  fs.readFile('words.txt', 'utf-8', function(err, data) {
    if(err) {
      throw err;
    }
    sendData(data);
  });
}).listen(3000);
