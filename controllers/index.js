const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const friendboard = require('./friendlist-routes')
const userboard = require('./userlist-routes');
const aboutRoute = require('./aboutRoute')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/friendlist', friendboard)
router.use('/userlist', userboard)
router.use('/about', aboutRoute)

module.exports = router;