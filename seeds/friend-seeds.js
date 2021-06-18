const { Friend } = require('../models');

const friendData = [
  {
    username: 'Mathew',
  },
  {
    username: 'Cody',
  },
  {
    username: 'Daniel',
  },
  {
    username: 'Christi',
  },
  {
    username: 'Evelyn',
  },
];

const seedFriends = () => Friend.bulkCreate(friendData);

module.exports = seedFriends;
