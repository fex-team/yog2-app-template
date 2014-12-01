var index = require('../models/index.js');
var util = require('../lib/util.js');

module.exports = function(req, res){
    res.render('{{-app_name-}}/page/index.tpl', index.getData());
};