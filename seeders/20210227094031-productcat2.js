'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('mockup_category2s', [  {
        "categoryid": "CatID_1",
        "categorytype_name": "ออร์แกนิค",
        "category": "ผัก",
        "lng": "Th",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_2",
        "categorytype_name": "ออร์แกนิค",
        "category": "เนื้อสัตว์",
        "lng": "Th",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_3",
        "categorytype_name": "ออร์แกนิค",
        "category": "ผลไม้",
        "lng": "Th",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_1",
        "categorytype_name": "Organic",
        "category": "vegetable",
        "lng": "En",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_2",
        "categorytype_name": "Organic",
        "category": "Meat",
        "lng": "En",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_3",
        "categorytype_name": "Organic",
        "category": "Fruit",
        "lng": "En",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
