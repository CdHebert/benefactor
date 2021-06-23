const { User } = require('../models');

const userData = [
  {
    username: 'Mathew',
    password: "pass123",
  },
  {
    username: 'Cody',
    password: "pass123",
  },
  {
    username: 'Daniel',
    password: "pass123",
  },
  {
    username: 'Christi',
    password: "pass123",
  },
  {
    username: 'Evelyn',
    password: "pass123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
