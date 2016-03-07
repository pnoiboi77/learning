var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/'));
app.get('/', function(req, res) {
    res.send('hello from server');
})

app.listen(3001, function() {
    console.log('server listening on 3001');
});
