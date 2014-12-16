var Student = require('../models/student');

exports.postStudents = function(req, res) {
    var student = new Student();

    student.name = req.body.name;
    student.studentId = req.body.studentId;
    student.school = req.body.school;
    student.grade = req.body.grade;
    student.studentClass = req.body.studentClass;
    student.major = req.body.major;
    student.sex = req.body.sex;
    student.telephone = req.body.telephone;
    student.dynedClass = req.body.dynedClass;

    student.save(function(err) {
        if (err)
            res.send(err);
        res.json({
            message: 'Student added to db!',
            data: student
        });
    });
};

exports.getStudents = function(req, res) {
    Student.find(function(err, students) {
        if (err)
            res.send(err);
        res.json(students);
    });
};

exports.getStudent = function(req, res) {
    Student.findOne({
        'studentId': req.params.studentId
    }, function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
    });
};

exports.putStudent = function(req, res) {
    Student.findOne({
        'studentId': req.params.studentId
    }, function(err, student) {
        if (err)
            res.send(err);
        student.name = req.body.name;
        student.school = req.body.school;
        student.grade = req.body.grade;
        student.studentClass = req.body.studentClass;
        student.major = req.body.major;
        student.sex = req.body.sex;
        student.telephone = req.body.telephone;
        student.dynedClass = req.body.dynedClass;

        student.save(function(err) {
            if (err)
                res.send(err);
            res.json({
                message: 'Student updated to db!',
                data: student
            });

        });
    });
}

exports.deleteStudent = function(req, res) {
    Student.findOneAndRemove({
        'studentId': req.params.studentId
    }, function(err) {
        if (err)
            res.send(err);
        res.json({
            message: 'delete success!'
        })
    });
}