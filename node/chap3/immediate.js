var immediate = setImmediate(function(a,b) {
  console.log(a + ' ' + b);
}, 'Hello.', 'How are you?');

setTimeout(function() {
  clearImmediate(immediate);
}, 3000);
