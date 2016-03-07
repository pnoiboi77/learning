var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.get('/', function(req, res) {
    res.sendFile('./index.html');
});

io.on('connection', function(socket) {
   var message = {user: 'nodeUser', text: 'Hello from node server socket!'};
   var interval = setInterval(function() {
       socket.emit('message', message);
   }, 1000);
   socket.on('disconnect', function() {
    clearInterval(interval);   
   });
});

http.listen(3008, function() {
    console.log('listening on *:3008');
});
/*var io = require('socket.io')(server);

server.listen(3003);


io.on('connection', function(socket) {
    var message = {user: 'nodeUser', text: 'Hello, world!'};
    var interval = setInterval(function() {
        socket.emit('message', message);
    }, 1000);
    
    socket.on('disconnetc', function() {
        clearInterval(interval);
    });
});
*/