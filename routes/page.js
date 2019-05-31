var express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', {
    title: '홈',
    user: req.user,
  });
});

router.get('/menu1', function(req,res) {
  res.render('menu1', {
    title: '홈',
    user: req.user,
  });
})

router.get('/menu2', function(req,res) {
  res.render('menu2', {
    title: '홈',
    user: req.user,
  });
})

router.get('/menu3', function(req,res) {
  res.render('menu3', {
    title: '홈',
    user: req.user,
  });
})

router.get('/login', isNotLoggedIn, function(req,res) {
  res.render('login', {
    title: '로그인',
    user: req.user,
    loginError: req.flash('loginError')
  } );
})

router.get('/join', isNotLoggedIn, (req,res) => {
  res.render('join', {
    title: '회원가입',
    user: req.user,
    joinError: req.flash('joinError')    // joinError키 값의 벨류값을 가져와서 message키의 벨류 값으로 지정해서 보냄
  });
})

module.exports = router;
