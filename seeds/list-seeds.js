const { List } = require('../models');

const listData = [
  {
    list_name: 'Shirts',
    user_id: 2
  },
  {
    list_name: 'Shorts',
    user_id: 3
  },
  {
    list_name: 'Music',
    user_id: 1
  },
  {
    list_name: 'Hats',
    user_id: 5
  },
  {
    list_name: 'Shoes',
    user_id: 4
  },
];

const seedLists = () => List.bulkCreate(listData);

module.exports = seedLists;
