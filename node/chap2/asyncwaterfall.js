var async = require('async');

async.waterfall([
  function(callback) {
    callback(null, 12, 15);
  },
  function(a, b, callback) {
    callback(null,(a + b) * 10);
  },
  function(cc, callback) {
    callback(null, Math.sqrt(cc));
  }
], function(err, c) {
  console.log(c);
});
