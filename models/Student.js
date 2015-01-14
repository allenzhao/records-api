var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: '请输入学生姓名'
    },
    studentId: {
        type: Number,
        required: '请输入学生学号',
        unique: true
    },
    school: {
        type: String,
        default: '',
        required: '请输入学生学院'
    },
    grade: {
        type: String,
        default: '',
        required: '请输入年级'
    },
    studentClass: {
        type: String,
        default: '',
        required: '请输入班级'
    },
    major: {
        type: String,
        default: '',
        required: '请输入专业'
    },
    sex: {
        type: String,
        default: '',
        required: '请输入性别'
    },
    telephone: {
        type: String,
        default: '',
        required: '请输入电话'
    },
    dynedClass: {
        type: String,
        default: '',
        required: '请输入 DynEd 班级'
    }
});

module.exports = mongoose.model('Student',StudentSchema);