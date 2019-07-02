'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    propertyType: DataTypes.TEXT,
    doorName: DataTypes.STRING,
    street: DataTypes.STRING,
    zip: DataTypes.STRING,
    country: DataTypes.STRING,
    roomCount: DataTypes.INTEGER,
    totalArea: DataTypes.FLOAT,
    ceilingHeight: DataTypes.FLOAT,
    percentUsed: DataTypes.FLOAT,
    floorCount: DataTypes.INTEGER,
    liftArea: DataTypes.FLOAT,
    steps: DataTypes.INTEGER,
    wearWay: DataTypes.FLOAT,
    stoppingZoneNeeded: {
      type: DataTypes.BOOLEAN,
      defaultValue: null
    }
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};