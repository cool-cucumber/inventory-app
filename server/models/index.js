const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  description : Sequelize.STRING,
  category : Sequelize.STRING,
  price : Sequelize.NUMBER,
  image: Sequelize.STRING
});

module.exports = {
  db: sequelize,
  Sauce,
};
