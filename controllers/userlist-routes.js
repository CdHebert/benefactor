const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')
const { User, List, Friend, UserFriend, Product } = require('../models');


router.get('/', (req, res) => {
    List.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'list_name',
            'user_id',
            'created_at'
        ],
    }).then(results => {
        const lists = results.map(list => list.get({ plain: true }));
        console.log(lists)
        res.render('userboard', {
            lists,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;