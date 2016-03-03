var http = require('http');
var server = http.createServer(function onRequest(req, resp) {
	resp.writeHead(200, { 'Content-Type': 'text/plain'});
	resp.write('Welcome to a simple HTTP Server');
	resp.end();
}).listen(3001);
