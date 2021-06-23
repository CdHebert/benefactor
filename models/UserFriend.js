const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserFriend extends Model {}

UserFriend.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    u_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    f_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'friend',
        key: 'friend_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_friend',
  }
);

module.exports = UserFriend;
