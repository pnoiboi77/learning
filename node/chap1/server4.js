var connect = require('connect');
var intercept = function(req, resp, next) {
  console.log('intecepted and saying hello');
  next();
};

var server = connect()
  .use(intercept)
  .use(function onRequest(req, resp) {
    resp.write("Hellow from the connect middleware package!");
    resp.end();
  }).listen(3003);
