'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mockup_productUniqs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productid: {
        type: Sequelize.STRING
      },
      sku: {
        type: Sequelize.STRING
      },
      barcode: {
        type: Sequelize.STRING
      },
      photourl: {
        type: Sequelize.STRING(1234)
      },
      link: {
        type: Sequelize.STRING(1234)
      },
      discount: {
        type: Sequelize.FLOAT
      },
      price: {
        type: Sequelize.FLOAT
      },
      pricediscount: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mockup_productUniqs');
  }
};