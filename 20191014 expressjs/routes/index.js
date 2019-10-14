var express = require('express');
var router = express.Router();

const { check, validationResult }  = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'form validation', success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
});

router.post('/submit', [
  check('email', 'invalid email address').isEmail(),
  check('password', 'password invalid').isLength({min: 4}),
  check('confirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.password))
], function(req, res, next){
  const errors = validationResult(req);
  var errorAll = errors.array();
  if (!errors.isEmpty()){
    req.session.errors = errors.array();
    req.session.success = false;
    
  }else{
    req.session.success = true;
  }
    return res.redirect('/');
});

// router.get('/test/:id', function(req, res, next){
//   res.render('test', {output: req.params.id});
// });

// router.post('/test/submit', function(req, res, next){
//   var id = req.body.id
//   res.redirect('/test/' + id);
// });

module.exports = router;
