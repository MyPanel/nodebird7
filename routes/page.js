var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/menu1', function(req,res) {
  res.render('menu1');
})

router.get('/menu2', function(req,res) {
  res.render('menu2');
})

router.get('/menu3', function(req,res) {
  res.render('menu3');
})

router.get('/login', function(req,res) {
  res.render('login');
})

module.exports = router;
