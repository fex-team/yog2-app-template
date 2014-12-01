module.exports = function(req, res){
    res.send('book index');
};

module.exports.get = function(req, res, next){
    res.send('get book ' + req.params.id);
};

module.exports.post = function(req, res, next){
    next(new Error('not implemented'));
};

module.exports.put = function(req, res, next){
    res.send('put book');
};

module.exports.delete = function(req, res, next){
    res.send('delete book ' + req.params.id);
};