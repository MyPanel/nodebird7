const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const { userId, name, password } = req.body;
    try {
        const exUser = await User.findOne({ where: { userId } });
        console.log(exUser);
        if (exUser) {
            req.flash('joinError', '이미 가입된 이메일입니다.'); // 키 값이 joinError
            return res.redirect('/join');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            userId,
            name,
            password: hash,
        });
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
        console.error(authError);
        return next(authError);
        }
        if (!user) {
            console.log(info.message);
            req.flash('loginError', info.message);
            return res.redirect('/login');
        }   
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
}
    // passport.authenticate('local', {      <- 위와 같은 코드
    //     successRedirect: '/',
    //     failureRedirect: '/login',
    //     failureFlash: true
    // })
);

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});


module.exports = router;