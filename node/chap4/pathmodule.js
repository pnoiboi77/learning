var path = require('path');
var directories = ['dirA', 'dirB', 'dirC'];
var directory = directories.join(path.sep);

console.log(directory);

process.env.PATH.split(path.delimiter).forEach(function(dir) {
    console.log(dir);
});


var fileName = 'c:\\node12\\asdd.c\\app.exe';
console.log(path.extname(fileName));
console.log(path.basename(fileName));
console.log(path.dirname(fileName));

var dirName = '\\DiraA\\DirB\\..\\..\\DirC';

console.log(path.normalize(dirName));

var dirName1 = 'c:\\node12\\asdd.c';
var dirName2 = 'c:\\ProgramFiles(x86)\\apples\\documents';

console.log(path.relative(dirName1, dirName2));
