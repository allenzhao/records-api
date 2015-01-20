var mongoose = require('mongoose');

var ScheduleSchema = new mongoose.Schema({
    Student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    weekday: {
        type: String,
        enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    lesson: {
        type: Number
    },
    location: {
        type: String,
        enum: ['北门一层', '北门二层', '北门三层']
    }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);