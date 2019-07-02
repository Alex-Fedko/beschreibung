'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    company: DataTypes.STRING,
    salution: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    street: DataTypes.STRING,
    zip: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    telephoneNumber: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};