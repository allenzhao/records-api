var mongoose = require('mongoose');

var RecordsSchema = new mongoose.Schema({
    Student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    requiredTimes: {
        type: Number
    },
    realTimes: {
        type: Number
    },
    leaveTimes: {
        type: Number
    },
    errorTimes: {
        type: Number
    },
    totalTime: {
        type: Number
    }
});

module.exports = mongoose.model('Records', RecordsSchema);