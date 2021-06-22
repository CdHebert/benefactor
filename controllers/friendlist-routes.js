const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')
const { User, List, Friend, UserFriend, Product } = require('../models');


router.get('/', (req, res) => {
    res.render('friendboard')
})



module.exports = router;