const router = require('express').Router();
const listRoutes = require('./list-routes');
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');
const friendRoutes = require('./friend-routes');

router.use('/lists', listRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/friends', friendRoutes);

module.exports = router;
