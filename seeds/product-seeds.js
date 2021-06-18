const { Product } = require('../models');

const productData = [
  {
    product_name: 'Wedding Gown',
    list_id: 3,
  },
  {
    product_name: 'Shoes',
    list_id: 3,
  },
  {
    product_name: 'Birthday Cake',
    list_id: 1,
  },
  {
    product_name: 'PS4',
    list_id: 2,
  },
  {
    product_name: 'Christmas tree',
    list_id: 4,
  },
  {
    product_name: 'Gift card',
    list_id: 4,
  },
  {
    product_name: 'Iphone 12 pro',
    list_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
