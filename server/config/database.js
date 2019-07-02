const Sequelize = require('sequelize');
const keys = require('./keys');

module.exports = new Sequelize(`${keys.DB}`, `${keys.USER}`, `${keys.PASSWORD}`, {
  host: `${keys.HOST}`,
  dialect: 'mssql'
});