const { UserFriend } = require('../models');

const userFriendData = [
  {
    u_id: 1,
    f_id: 3,
  },
  {
    u_id: 1,
    f_id: 4,
  },
  {
    u_id: 1,
    f_id: 2,
  },
  {
    u_id: 2,
    f_id: 5,
  },
  {
    u_id: 2,
    f_id: 4,
  },
  {
    u_id: 3,
    f_id: 1,
  },
  {
    u_id: 4,
    f_id: 5,
  },
  {
    u_id: 5,
    f_id: 1,
  },
];

const seedUserFriends = () => UserFriend.bulkCreate(userFriendData);

module.exports = seedUserFriends;
