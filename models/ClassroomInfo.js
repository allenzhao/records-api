var mongoose = require('mongoose');

var ClassroomInfoSchema = new mongoose.Schema({
    IPAddress: {
        type: String
    },
    room: {
        type: String
    },
    location: {
        type: String,
        enum: ['北门一层', '北门二层', '北门三层']
    }
});

module.exports = mongoose.model('ClassroomInfo', ClassroomInfoSchema);