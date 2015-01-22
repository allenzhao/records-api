var express = require('express');
var router = express.Router();

var student = require('./student.js');
var records = require('./records.js');
var logs = require('./logs.js');
var startup = require('./startup.js');
var classroom = require('./classroom.js');

// Student info routes
router.get('/students', student.getAll);
router.get('/student/:id', student.getOne);
router.post('/student/', student.create);
router.put('/student/:id', student.update);
router.delete('/student/:id', student.deleteStudent);
// Classroom info routes
router.post('/classroom/', classroom.create);
router.get('/classrooms/', classroom.getAll);
router.get('/classroom/:id', classroom.getOne);
router.put('/classroom/:id',classroom.update);
router.delete('/classroom/:id',classroom.deleteclassroom);

//// Records routes
//router.get('/records',records.getAll);
//router.get('/student/:studentId/records',records.getByStudentId);

// Logs routes

//// Check in and check out routes
//router.post('/checkIn',logs.checkIn);
//router.put('/checkOut',logs.checkOut);

router.get('/startup', startup.index);

module.exports = router;
