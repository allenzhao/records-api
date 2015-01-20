var mongoose = require('mongoose');

var TermPlanSchema = new mongoose.Schema({
    StartTime: {
        type: Date
    },
    endTime: {
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

module.exports = mongoose.model('TermPlan', TermPlanSchema);