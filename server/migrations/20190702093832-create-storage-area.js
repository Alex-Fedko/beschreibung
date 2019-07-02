'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StorageAreas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      information: {
        type: Sequelize.TEXT
      },
      floorCount: {
        type: Sequelize.INTEGER
      },
      percentUsed: {
        type: Sequelize.FLOAT
      },
      totalArea: {
        type: Sequelize.FLOAT
      },
      ceilingFloat: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('StorageAreas');
  }
};