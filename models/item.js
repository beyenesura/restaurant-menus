const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.NUM,
    allowNull: false
  },
  vegetarian: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = {Item};
