var config = require('./config.json');
var env = config.current_env;
var moment = require('moment');
var helpers = {
    checkLocation: function (location) {
        var currentHour = moment().hour();
        var startTime = config[env].allowedTime[location].start;
        var endTime = config[env].allowedTime[location].start;
        return (currentHour >= startTime && currentHour >= endTime);
    }
};
module.exports = helpers;