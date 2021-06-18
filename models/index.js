// import models
const Product = require('./Product');
const List = require('./List');
const User = require('./User');
const Friend = require('./Friend');
const UserFriend = require('./UserFriend');

/* USER AND FRIEND ASSOCIATION */
// Friends belongsTo User
User.belongsToMany(Friend, {
  through: UserFriend,
  foreignKey: 'u_id',
});
// User has many Friends
Friend.belongsToMany(User, {
  through: UserFriend,
  foreignKey: 'f_id',
});

/* USER AND LIST ASSOCIATION */
// Lists belongTo User (through UserList)
User.hasMany(List, {
  foreignKey: 'user_id'
});
// User belongsToMany Lists (through UserList)
List.belongsTo(User, {
  foreignKey: 'user_id'
});

/* LIST AND PRODUCT ASSOCIATION */
// List has many Products
List.hasMany(Product, {
  foreignKey: 'list_id',
});
// Products belongsTo List
Product.belongsTo(List, {
  foreignKey: 'list_id',
});

module.exports = {
  Product,
  List,
  User,
  Friend,
  UserFriend,
};
