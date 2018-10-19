var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res){
  var db = req.db;
  var collection = db.get('nodetest1');
  collection.find({}, {}, function(e, docs){
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

module.exports = router;
