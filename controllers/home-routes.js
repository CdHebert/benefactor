const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, List } = require('../models');

router.get ('/', (req, res) => {
    User.findAll({}).then(results => {
        const user = results.map(post => post.get({ plain: true }));

        res.render('homepage', {
            user,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        confirm.log(err);
        res.status(500).json(err);
    });
});



router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

// router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('signup');
//   });

  

  module.exports = router