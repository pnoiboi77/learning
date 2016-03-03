var interval = setInterval(function(a,b) {
  console.log(a + ' ' + b);
}, 1000, 'Hello.', 'How are you?');

setTimeout(function() {
  clearInterval(interval);
}, 3000);
