const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')
const { User, List, Friend, UserFriend, Product } = require('../models');


router.get ('/', (req, res) => {
    User.findAll({}).then(results => {
        const user = results.map(post => post.get({ plain: true }));

        res.render('userboard', {
            user,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        confirm.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;