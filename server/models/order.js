'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    ipAddress: DataTypes.STRING,
    reason: DataTypes.TEXT,
    costAbsorder: DataTypes.TEXT,
    orderType: DataTypes.TEXT,
    minDate: DataTypes.DATE,
    maxDate: DataTypes.DATE,
    estimateValidTill: DataTypes.DATE,
    description: DataTypes.TEXT,
    items: DataTypes.TEXT,
    additionalInformation: DataTypes.TEXT,
    orderedById: DataTypes.INTEGER,
    contactPersonId: DataTypes.INTEGER,
    paymentInformations: DataTypes.TEXT,
    discount: DataTypes.TEXT,
    truckVolume: DataTypes.FLOAT,
    exteriorLeft: DataTypes.BOOLEAN,
    disposalVolume: DataTypes.FLOAT,
    FounitureDismantlingInformation: DataTypes.TEXT,
    FounitureDismantlingTime: DataTypes.FLOAT,
    flooringDisposal: DataTypes.FLOAT,
    curtainsDisposal: DataTypes.FLOAT,
    storageAreaLoadingStationId: DataTypes.INTEGER,
    storageAreaUnloadingStationId: DataTypes.INTEGER,
    addressLoadingId: DataTypes.INTEGER,
    addressUnloadingId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};