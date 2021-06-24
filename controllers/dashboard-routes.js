const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')
const { User, List, Friend, UserFriend, Product } = require('../models');


router.get('/', withAuth,  (req, res) => {
    console.log(req.session);
    User.findAll({})
      .then(dbPostData => {
        const users = dbPostData.map(user => user.get({ plain: true }));
        res.render('dashboard', { users, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;