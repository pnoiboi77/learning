var async = require('async');

async.parallelLimit([
  function(callback) {
    setTimeout(function() {
      console.log('Task 1');
      callback(null, 1);
    }, 3000);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task 2');
      callback(null, 2);
    }, 2000);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task 3');
      callback(null, 3);
    }, 1000);
  }
], 2, function(err, res) {
  console.log(res);
})
