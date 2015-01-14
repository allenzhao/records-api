var studentModel = require('../models/Student');
var student = {
    getOne: function (req, res) {
        studentModel.findOne({studentId: req.params.id}, function (err, data) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    data: data
                });
            }
        });
    },

    getAll: function (req, res) {
        studentModel.find(function (err, data) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    data: data
                });
            }
        });
    },

    create: function (req, res) {
        var student = new studentModel(req.body);
        student.save(function (err) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    message: 'Student added to db.',
                    data: student
                });
            }
        });
    },

    update: function (req, res) {
        studentModel.findOneAndUpdate({studentId: req.params.id}, req.body, function (err, student) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    message: 'Updates saved.',
                    data: student
                });
            }
        });
    },

    deleteStudent: function (req, res) {
        studentModel.remove({studentId:req.params.id}, function (err){
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    message: 'Deleted student.'
                });
            }
        });
    }
};

module.exports = student;
