var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var WeekPlanSchema = new mongoose.Schema({
    startCheckInTime: {
        type: Date
    },
    lateCheckInTime: {
        type: Date
    },
    endCheckInTime: {
        type: Date
    },
    StartCheckOutTime: {
        type: Date
    },
    EndCheckOutTime: {
        type: Date
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
        enum: ['北门一层', '北门二层', '知行']
    }
});

WeekPlanSchema.plugin(autoIncrement.plugin, 'WeekPlan');
module.exports = mongoose.model('WeekPlan', WeekPlanSchema);
