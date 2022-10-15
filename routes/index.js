var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { name:'M.Bhavanya',
  email:'bhavan@gmail.com',
  contact:'9787331503',
  fathersName:'K.Murugesan',
  dob:'10.08.2000',
  age:'21',
  bloodgroup:'B+ve'});
});

module.exports = router;
