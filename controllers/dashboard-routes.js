const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')
const { User, List, Friend, UserFriend, Product } = require('../models');


// router.get('/dashboard', withAuth,  (req, res) => {
//     console.log(req.session);
//     User.findAll({})
//       .then(dbPostData => {
//         const users = dbPostData.map(user => user.get({ plain: true }));
//         res.render('dashboard', { users, loggedIn: true });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

//   router.get ('/dashboard', (req, res) => {
//     User.findAll({}).then(results => {
//         const user = results.map(post => post.get({ plain: true }));

//         res.render('dashboard', {
//             user,
//             loggedIn: req.session.loggedIn
//         });
//     }).catch(err => {
//         confirm.log(err);
//         res.status(500).json(err);
//     });
// });

router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

// router.get('/dashboard', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('dashboard');
// });

module.exports = router;