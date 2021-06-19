const router = require('express').Router();

const apiRoutes = require('./api/');

router.use('/api', apiRoutes);
router.put('/api/list-routes/:updateList', controllers.updateList);
router.delete('/api/list-routes:listId', controllers.deleteList);
module.exports = router;