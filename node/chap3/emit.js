var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('myEvent');

var emitter2 = new events.EventEmitter();
var author = 'Bernard';
var title = 'The wannabe';

emitter2.emit('addAuthorTitle', author, title);

//-----above events are useless

var emitter3 = new events.EventEmitter();
// add event listener
emitter3.on('addAuthorTitle', function(auth,tit) {
  console.log('Added author and title: ' + auth + ' - ' + tit);
});

console.log('emitting event');
emitter3.emit('addAuthorTitle', author, title);
console.log('emitting event again');
emitter3.emit('addAuthorTitle', author, title);

//-----above utilized event listeners.
var emitter4 = new events.EventEmitter();

emitter4.once('addAuthorTitle', function(a,t) {
  console.log('added title and author ' + t + ' - ' + a);
});

console.log('emitting event');
emitter4.emit('addAuthorTitle', author, title);
console.log('emitting event again');
emitter4.emit('addAuthorTitle', author, title);
