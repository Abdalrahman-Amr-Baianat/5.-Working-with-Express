const sequelizeErd = require("sequelize-erd");

const sequelize = require("./database");

const User = require("../models/user");
const Product = require("../models/product");
// const Cart = require("./util/cart");
// const CartItem = require("./util/cartItem");



console.log("Models:", sequelize.models);

sequelizeErd({ source: sequelize }).then((svg) => {
  const fs = require("fs");
  fs.writeFileSync("LastERD.svg", svg);
  console.log("✅ ERD.svg generated");
});
