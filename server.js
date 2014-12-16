// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var studentController = require('./controller/student');
    // Connect to mongodb
mongoose.connect("mongodb://localhost:27017/api-dev");

// Create our Express application
var app = express();



// Use environment defined port or 3000
var port = process.env.PORT || 3000;



// Create our Express router
var router = express.Router();

router.route('/students')
	.post(studentController.postStudents)
	.get(studentController.getStudents);

router.route('/students/:studentId')
	.get(studentController.getStudent)
	.put(studentController.putStudent)
	.delete(studentController.deleteStudent);

app.use(bodyParser.urlencoded({
    extended: true
}));

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('API server running on ' + port);