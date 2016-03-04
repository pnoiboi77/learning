var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');
var mongo = require('mongojs');

var mimeTypes = {
    'html': 'text/html',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'png': 'image/png',
    'js': 'image/js',
    'css': 'image/css',
};

var dbUrl = "text";
var collections = ["testData"];
var db = mongo(dbUrl, collections);
var server = http.createServer(function onRequest(req, resp) {
    var urlParts = url.parse(req.url);
    var fullPath = urlParts.pathname;
    var page = 'pages' +urlParts.pathname;

    console.log(page);
    var jsonUserObject = "";
    
    if (fullPath == "/post") {
        console.log("Posted data");
        var userName = "";
        var userEmail = "";
        req.on("data", function(chunk) {
            jsonUserObject = JSON.parse(chunk.toString());
            console.log(jsonUserObject);
            userName = jsonUserObject.name;
            userEmail = jsonUserObject.email;
            db.testData.insert({name: userName, email: userEmail}, function(err, testData) {
                if(err || !testData) {
                    console.log("Unable to add user");
                } else {
                    console.log('successfully added data.');
                }
                
            });
        });
    }
    
    var mimeType = mimeTypes[path.extname(page).split(".")[1]];
    fs.exists(page, function fileExists(exists) {
        if (exists) {
            resp.writeHead(200, mimeType);
            fs.createReadStream(page).pipe(resp);
        } else {
            resp.write("Page Not Found");
            resp.end();
        }        
    });
}).listen(3002);