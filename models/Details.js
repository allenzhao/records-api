var mongoose = require('mongoose');

var DetailsSchema = new mongoose.Schema({
    Student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: 'Student '
    },
    IP: {
        type: Number
    },
    checkInTime: {
        type: Date,
        default: Date.now()
    },
    changeTime: {
        type: Date
    },
    checkOutTime: {
        type: Date
    },
    keepTime: {
        type: Date
        //default: Date.now()
    },
    signInState: {
        type: String,
        enum: ['正常', '迟到', '旷课'],
        default: ''
    },
    action: {
        type: String,
        enum: ['未注销', '已注销']
    },
    state: {
        type: String,
        enum: ['旷课', '已换机', '正常', '迟到', '在线', '换机中']
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model('Details', DetailsSchema);
