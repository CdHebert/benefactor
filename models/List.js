const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class List extends Model {}

List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    list_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id'
      }
    } 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'list',
  }
);

module.exports = List;
