// Import require files.
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// Import configure.
var CFG = require('./config.json');
var env = CFG.current_env;
var port = CFG[env].port || 8080;
mongoose.connect(CFG[env].db);

// Token verification
app.all('/*', [require('./tokenValidation')]);

app.all('/*', function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Token');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', require('./routes'));

app.use(function (req, res, next) {
    if (env == 'development') {
        var err = new Error('Resource Not Found');
        err.status = 404;
        next(err);
    } else {
        res.code(404);
        res.json({
            "status": 404,
            "message": "Resource Not Found"
        });
    }
});

app.listen(port);
console.log("App started on " + port);
