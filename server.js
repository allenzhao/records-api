// Loading require lib
var restify = require("restify");
var mongoose = require("mongoose");

// Load config
var configure = require('./configure.json');

mongoose.connect(configure.db);

var server = restify.createServer({
    name: 'Records-API'
});

server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(configure.port,configure.ip,function (){
    console.log("Server running on" + configure.ip + " on port: " + configure.port);
});