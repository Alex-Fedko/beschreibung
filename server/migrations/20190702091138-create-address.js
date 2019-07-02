'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      propertyType: {
        type: Sequelize.TEXT
      },
      doorName: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      roomCount: {
        type: Sequelize.INTEGER
      },
      totalArea: {
        type: Sequelize.FLOAT
      },
      ceilingHeight: {
        type: Sequelize.FLOAT
      },
      percentUsed: {
        type: Sequelize.FLOAT
      },
      floorCount: {
        type: Sequelize.INTEGER
      },
      liftArea: {
        type: Sequelize.FLOAT
      },
      steps: {
        type: Sequelize.INTEGER
      },
      wearWay: {
        type: Sequelize.FLOAT
      },
      stoppingZoneNeeded: {
        type: Sequelize.BOOLEAN,
        defaultValue: null
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
    return queryInterface.dropTable('Addresses');
  }
};