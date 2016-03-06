var friends = ['Tim', 'Burt', 'Ernie', 'Eve'];

friends.forEach(function(name, index) {
    console.log((index + 1) + '. ' + name);
})

var registerFunc = function(t) {
    t();
}

var hello = function() {
    console.log('Hello from var hello.');
}

registerFunc(hello);