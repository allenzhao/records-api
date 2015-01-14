var express = require('express');
var router = express().Router();

var student = require('./student.js');
var records = require('./records.js');
var logs = require('./logs.js');

router.get('/students/:limit', student.getAll);
router.get('/student/:id', student.getOne);
router.post('/student', student.create);
router.put('/student/:id', student.update);
router.delete('/student/:id',student.deleteStudent);


