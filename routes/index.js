var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/character', function(req, res, next) {
  res.render('characters');
});

module.exports = router;
