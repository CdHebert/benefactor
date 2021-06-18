// import models
const Product = require('./Product');
const List = require('./List');
const User = require('./User');

// Products belongsTo List
Product.belongsTo(List, {
  foreignKey: 'list_id',
});
// List has many Products
List.hasMany(Product, {
  foreignKey: 'list_id',
});
// Lists belongs to User
List.belongsTo(User, {
  foreignKey: 'user_id'
});
// User has many Lists
User.hasMany(List, {
  foreignKey: 'user_id'
});
module.exports = {
  Product,
  List,
  User,
};
