const { List } = require('../models');

const listData = [
  {
    list_name: 'Birthday',
    user_id: 2    
  },
  {
    list_name: 'Birthday',
    user_id: 3    
  },
  {
    list_name: 'Wedding',    
    user_id: 4    
  },
  {
    list_name: 'Christmas',    
    user_id: 1    
  },
];

const seedLists = () => List.bulkCreate(listData);

module.exports = seedLists;
