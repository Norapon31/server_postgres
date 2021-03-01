'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mockup_productDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      productname: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      benefit: {
        type: Sequelize.STRING(1234)
      },
      content: {
        type: Sequelize.STRING(1234)
      },
      recommendmenu: {
        type: Sequelize.STRING(1234)
      },
      lng: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mockup_productDetails');
  }
};