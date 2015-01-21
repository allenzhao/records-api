var ClassroomModel = require('../models/ClassroomInfo');
var classroom = {
    getOne: function (req, res) {
        ClassroomModel.findById(req.params.id, function (err, data) {
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
        ClassroomModel.find(function (err, data) {
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
        var Classroom = new ClassroomModel(req.body);
        Classroom.save(function (err) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    message: 'Classroom added to db.',
                    data: Classroom
                });
            }
        });
    },

    update: function (req, res) {
        ClassroomModel.findOneAndUpdate({_id: req.params.id}, req.body, function (err, Classroom) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    message: 'Updates saved.',
                    data: Classroom
                });
            }
        });
    },

    deleteclassroom: function (req, res) {
        ClassroomModel.remove({_id: req.params.id}, function (err) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    message: 'Deleted Classroom.'
                });
            }
        });
    }
};
module.exports = classroom;
