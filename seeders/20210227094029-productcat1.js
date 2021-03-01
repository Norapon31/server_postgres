'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('mockup_category1s', [ {
        "categoryid": "CatID_1",
        "category": "ผักใบ",
        "lng": "Th",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_2",
        "category": "เนื้อหมู",
        "lng": "Th",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_3",
        "category": "ผลไม้สด",
        "lng": "Th",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_1",
        "category": "เห็ด",
        "lng": "Th",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_2",
        "category": "เนื้อวัว",
        "lng": "Th",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_1",
        "category": "Leafy vegetables",
        "lng": "En",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_2",
        "category": "Pork",
        "lng": "En",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_3",
        "category": "Fresh fruit",
        "lng": "En",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_4",
        "category": "Mushroom",
        "lng": "En",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "categoryid": "CatID_5",
        "category": "Beef",
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
