'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ipAddress: {
        type: Sequelize.STRING
      },
      reason: {
        type: Sequelize.TEXT
      },
      costAbsorder: {
        type: Sequelize.TEXT
      },
      orderType: {
        type: Sequelize.TEXT
      },
      minDate: {
        type: Sequelize.DATE
      },
      maxDate: {
        type: Sequelize.DATE
      },
      estimateValidTill: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      items: {
        type: Sequelize.TEXT
      },
      additionalInformation: {
        type: Sequelize.TEXT
      },
      orderedById: {
        type: Sequelize.INTEGER
      },
      contactPersonId: {
        type: Sequelize.INTEGER
      },
      paymentInformations: {
        type: Sequelize.TEXT
      },
      discount: {
        type: Sequelize.TEXT
      },
      truckVolume: {
        type: Sequelize.FLOAT
      },
      exteriorLeft: {
        type: Sequelize.BOOLEAN
      },
      disposalVolume: {
        type: Sequelize.FLOAT
      },
      FounitureDismantlingInformation: {
        type: Sequelize.TEXT
      },
      FounitureDismantlingTime: {
        type: Sequelize.FLOAT
      },
      flooringDisposal: {
        type: Sequelize.FLOAT
      },
      curtainsDisposal: {
        type: Sequelize.FLOAT
      },
      storageAreaLoadingStationId: {
        type: Sequelize.INTEGER
      },
      storageAreaUnloadingStationId: {
        type: Sequelize.INTEGER
      },
      addressLoadingId: {
        type: Sequelize.INTEGER
      },
      addressUnloadingId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};