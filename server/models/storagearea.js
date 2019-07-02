'use strict';
module.exports = (sequelize, DataTypes) => {
  const StorageArea = sequelize.define('StorageArea', {
    information: DataTypes.TEXT,
    floorCount: DataTypes.INTEGER,
    percentUsed: DataTypes.FLOAT,
    totalArea: DataTypes.FLOAT,
    ceilingFloat: DataTypes.FLOAT
  }, {});
  StorageArea.associate = function(models) {
    // associations can be defined here
  };
  return StorageArea;
};