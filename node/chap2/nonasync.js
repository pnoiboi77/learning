var results = [];

setTimeout(function() {
  console.log('Task 1');
  results[0] = 1;
  setTimeout(function() {
    console.log('Task 2');
    results[1] = 2;
    setTimeout(function() {
      console.log('Task 3');
      results[2] = 3;
    }, 1000);
  }, 2000);
}, 3000);
