const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const friendboard = require('./friendlist-routes')
const userboard = require('./userlist-routes');
const personalRoute = require('./personalRoute');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/friendlist', friendboard)
router.use('/userlist', userboard)
router.use('/personal', personalRoute)


module.exports = router;