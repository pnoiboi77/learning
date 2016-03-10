var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic('./'));
console.log(serveStatic('./'));
app.listen(5100);