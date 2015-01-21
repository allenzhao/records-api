var mongoose = require('mongoose');

var ClassroomInfoSchema = new mongoose.Schema({
    IPAddress: {
        type: String,
        required: '请输入 IP',
        unique: true,
        dropDups: true
    },
    room: {
        type: String,
        required: '请输入教室名称'
    },
    location: {
        type: String,
        enum: ['北门一层', '北门二层', '知行'],
        required: '请输入教室位置'
    }
});

module.exports = mongoose.model('ClassroomInfo', ClassroomInfoSchema);