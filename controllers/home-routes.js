const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, List, Friend, UserFriend, Product } = require('../models');

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

router.get('/friends', (req, res) => {
    List.findAll({
    
      include: [
        // {
        //   model: UserFriend,
        // },
        {
          model: Friend,
        },
        {
            model:List
        },
        {
            model: Product
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No friends found' });
          return;
        }
  
        const User = dbPostData.get({ plain: true });
  
        res.render('list-view', {
          User,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
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


  

  module.exports = router