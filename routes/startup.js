var ClassroomInfoModel = require('../models/ClassroomInfo');
var DetailsModel = require('../models/Details');
var CheckInHelpers = require('../checkInHelpers');
var startup = {
    index: function (req, res) {
        var ip = req.ip;
        var time = Date.now();

        ClassroomInfoModel.findOne({IPAddress: ip}, function (err, data) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                if (CheckInHelpers.checkLocation(time, data.location)) {
                    DetailsModel.findOne({IP: ip}, function (err, data) {
                        if (err) {
                            res.status(500);
                            res.json({
                                code: 500,
                                err: err,
                                message: "系统错误"
                            });
                        } else {
                            // Do sth with data
                            var alreadyCheckedIn = true;
                            if (alreadyCheckedIn) {
                                res.status(200);
                                res.json({
                                    code: 200,
                                    message: "已经登录",
                                    student: alreadyCheckedIn.student
                                });
                            } else {
                                res.status(202);
                                res.json({
                                    code: 202,
                                    message: "可以开始签到"
                                })
                            }
                        }
                    })
                } else {
                    res.status(403);
                    res.json({
                        code: 403,
                        message: "当前时间该机器不允许签到, 请稍后再试或联系值班员."
                    });
                }
            }
        });
    }
};
module.exports = startup;