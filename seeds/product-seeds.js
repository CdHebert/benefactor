const { Product } = require('../models');

const productData = [
  {
    product_name: 'Wedding Gown',
    image_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    store_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    list_id: 3,
  },
  {
    product_name: 'Shoes',
    image_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    store_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    list_id: 3,
  },
  {
    product_name: 'Birthday Cake',
    image_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    store_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    list_id: 1,
  },
  {
    product_name: 'PS4',
    image_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    store_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    list_id: 2,
  },
  {
    product_name: 'Christmas tree',
    image_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    store_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    list_id: 4,
  },
  {
    product_name: 'Gift card',
    image_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    store_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    list_id: 4,
  },
  {
    product_name: 'Iphone 12 pro',
    image_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    store_link: 'https://www.marieegallery.com/products/blue-enzoani-natsuko',
    list_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
