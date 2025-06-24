const sequelize = require("../util/database");

const Sequelize = require("sequelize");

const OrderItem = sequelize.define("odrerItem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity : Sequelize.INTEGER,

});

module.exports = OrderItem;
