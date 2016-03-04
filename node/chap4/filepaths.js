console.log('This file is ' + __filename);
console.log('It\'s located in ' + __dirname);
console.log('The current working directory is ' + process.cwd());

process.chdir('../');
console.log('The new working directory is ' + process.cwd());

console.log(process.execPath);
