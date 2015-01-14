module.exports = function (req, res, next) {
    var CFG = require('./config.json');
    var token = (req.body && req.body.api_token) || (req.query && req.query.api_token) || req.headers['x-token'];
    if (token == CFG[CFG.current_env].token) {
        next();
    } else {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid Token"
        });
    }
};