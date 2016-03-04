var fs = require('fs');
var path = '/Users/bespan/downloads/vs_community.exe';

fs.exists(path, function(exists) {
    console.log(path + ' exists? ' + exists);
});

fs.stat(path, function(e,s) {
    console.log(s);
    console.log(s.isFile());
    console.log(s.isDirectory());
    console.log(s.isBlockDevice());
    console.log(s.isCharacterDevice());
    console.log(s.isFIFO());
    console.log(s.isSocket()); 
});

var path2 = '/Users/bespan/documents/learningcode/node/chap5/hello.txt';

fs.exists(path2, function(e) {
    fs.open(path2, "r", function(e,fd) {
        if (e) {
            console.error('open error: ' + e.message);
        } else {
            console.log('Successfully opened ' + path2);   
        }
    });
});

fs.stat(path2, function(e,s) {
    fs.open(path2,'r',function(e2, fd) {
        if (s.size > 0) {
            var buffer = new Buffer(s.size);
            console.log(buffer.length);
            fs.read(fd, buffer, 0, buffer.length, null, function(e3, bytesRead, b) {
                var data = b.toString('utf8');
                console.log(data);
            });
        }
    });
});

fs.readFile(path2, 'utf8', function(e,d) {
    if (e) {
        console.error('read error: ' + e.message);
    } else {
        console.log(d);
    }
});


fs.writeFile(path2, 'Hello from the Node writeFile method!', function(e) {
    if (e) {
        console.error('write error: ' + e.message);
    } else {
        console.log('Successful write to ' + path2);
    }
});

fs.stat(path2, function(e,s) {
    fs.open(path2,'a',function(e2, fd) {        
        var data = 'appending to end of file.';
        fs.write(fd, data, function(e4, w, s) {
            if (e4) {
                console.error('append write error: ' + e4.message);
            } else {
                console.log('succesfully appended ' + path2);
            }
        });        
    });
});

fs.exists(path2, function(e) {
    fs.open(path2, "r", function(e,fd) {
        if (e) {
            console.error('open error: ' + e.message);
        } else {
            console.log('Successfully opened ' + path2);   
            fs.close(fd, function(e2) {
                if (e2) {
                    console.error('close error: ' + e2.message);
                } else {
                    console.log('File was closed!');
                }
            });
        }
    });
});

