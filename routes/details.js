var DetailsModel = require('../models/Details');
var details = {
    getOne: function (req, res) {
        DetailsModel.findOne({_id: req.params.id}, function (err, data) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    data: data
                });
            }
        });
    },

    getAll: function (req, res) {
        DetailsModel.find(function (err, data) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    data: data
                });
            }
        });
    },

    create: function (req, res) {
        var Details = new DetailsModel(req.body);
        Details.save(function (err) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    message: 'Details added to db.',
                    data: Details
                });
            }
        });
    },

    update: function (req, res) {
        DetailsModel.findOneAndUpdate({_id: req.params.id}, req.body, function (err, Details) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    message: 'Updates saved.',
                    data: Details
                });
            }
        });
    },

    deleteDetails: function (req, res) {
        DetailsModel.remove({_id: req.params.id}, function (err) {
            if (err) {
                res.status(500);
                res.json(err);
            } else {
                res.json({
                    status: 200,
                    message: 'Deleted Details.'
                });
            }
        });
    }
};
module.exports = details;
