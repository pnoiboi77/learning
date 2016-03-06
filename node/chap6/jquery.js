var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// configure app to use bodyParser()
// this will let us get data from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// set port
var port = process.env.PORT || 3000;
// get instance of express router
var router = express.Router(); 

// test route to make sure everything works
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes


// end more routes

// register the routs
// all routes will be prefixed with /api
app.use('/api', router);

// start the server
app.listen(port);
console.log('Server started on port ' + port);