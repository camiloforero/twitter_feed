var express = require('express');
var router = express.Router();

var fs = require('fs')
var tweets = JSON.parse(fs.readFileSync('tweets.json', 'utf-8'))

/* GET home page. */
router.get('^/$', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('^/tweets/$', function(req, res, next) {
  res.render('tweets', {'title': 'Lista de tweets', 'tweets':tweets});
});

module.exports = router;
