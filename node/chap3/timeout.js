setTimeout(function(a,b) {
  console.log(a + ' ' + b);
}, 1000, 'Hello.', 'How are you?');

var timeOut = setTimeout(function(a,b) {
  console.log(a + ' ' + b);
}, 1000, 'Hello.', 'How are you?');

clearTimeout(timeOut);
