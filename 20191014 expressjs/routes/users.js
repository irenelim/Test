var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resources');
});

router.get('/detail', function(req, res, next) {
  res.send('detail');
});

module.exports = router;