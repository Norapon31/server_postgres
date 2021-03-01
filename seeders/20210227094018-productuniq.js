'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('mockup_productUniqs', [
      {
        "productid": "PD001",
        "sku": "SKU001",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU001.jpg?alt=media&token=a15d929a-0851-4886-a8b9-b5d9d95b4c0a",
        "link": "https://health.mthai.com/howto/health-care/29710.html\nhttp://www.rakbankerd.com/agriculture/page.php?id=1136&s=tblplant",
        "discount": "0",
        "price": "40",
        "pricediscount": "40",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD002",
        "sku": "SKU002",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU002.jpg?alt=media&token=aa71d788-ec36-4b67-9ffa-19662a616094",
        "link": "https://www.sanook.com/health/3373/\nhttps://health.kapook.com/view141273.html",
        "discount": "0",
        "price": "50",
        "pricediscount": "50",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD003",
        "sku": "SKU003",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU003.jpg?alt=media&token=fc199ee9-d27f-4ee0-be54-5155571e54b3",
        "link": "https://health.kapook.com/view133914.html\nhttps://www.sanook.com/health/4517/",
        "discount": "5",
        "price": "50",
        "pricediscount": "47.5",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD004",
        "sku": "SKU004",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU004.jpg?alt=media&token=34dfe965-0b9a-4055-a37c-4ca62cc0d6cb",
        "link": "https://www.xn--12cg1cxchd0a2gzc1c5d5a.net/%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%A1/\nhttps://women.thaiza.com/health/387460/",
        "discount": "0",
        "price": "45",
        "pricediscount": "45",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD005",
        "sku": "SKU005",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU005.jpg?alt=media&token=12be4e0d-0239-4dd2-9f87-f6d24171edec",
        "link": "https://cities.trueid.net/article/%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%A2%E0%B8%8A%E0%B8%99%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%8A%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%88%E0%B8%B4-trueidintrend_52206",
        "discount": "0",
        "price": "45",
        "pricediscount": "45",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD006",
        "sku": "SKU006",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU006.jpg?alt=media&token=7b46f5d6-c835-4900-96a4-ff8ae2a8f9cd",
        "link": "https://www.youtube.com/watch?v=Y7YXOUVWw8U",
        "discount": "10",
        "price": "80",
        "pricediscount": "72",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD007",
        "sku": "SKU007",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU007.jpg?alt=media&token=5f8ca6a0-63e2-4811-8466-f247466426ba",
        "link": "https://www.youtube.com/watch?v=wjBhTOaQPE0",
        "discount": "5",
        "price": "100",
        "pricediscount": "95",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD008",
        "sku": "SKU008",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU008.jpg?alt=media&token=9f728f9a-1ccd-4f33-8e4d-84c54e390ffa",
        "link": "https://www.youtube.com/watch?v=HLd1W_8o-oA",
        "discount": "5",
        "price": "120",
        "pricediscount": "114",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD009",
        "sku": "SKU009",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU009.jpg?alt=media&token=068dea4d-0dcd-4c88-8684-10a83c5f6b10",
        "link": "https://www.youtube.com/watch?v=btrqvjylBog",
        "discount": "0",
        "price": "135",
        "pricediscount": "135",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD010",
        "sku": "SKU010",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU010.jpg?alt=media&token=615a967a-2acc-4b17-96db-3ad225b1d525",
        "link": "https://www.youtube.com/watch?v=aCAe3pIF51o",
        "discount": "5",
        "price": "140",
        "pricediscount": "133",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD011",
        "sku": "SKU011",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU011.jpg?alt=media&token=42239cf1-d6fd-4517-a7ea-9b6ddeccdb39",
        "link": "https://www.youtube.com/watch?v=j2x7MAa2qnM",
        "discount": "0",
        "price": "150",
        "pricediscount": "150",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD012",
        "sku": "SKU012",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU012.jpg?alt=media&token=083d9bf8-e111-441f-9ebd-fd1d0d31a156",
        "link": "https://www.youtube.com/watch?v=tCvVAW2aI4A",
        "discount": "5",
        "price": "45",
        "pricediscount": "42.75",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD013",
        "sku": "SKU013",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU013.jpg?alt=media&token=b8993fbd-b837-484e-a5ec-e1d15d8afcc7",
        "link": "https://www.youtube.com/watch?v=_xix1Ti3Jq4",
        "discount": "10",
        "price": "250",
        "pricediscount": "225",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD014",
        "sku": "SKU014",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU014.jpg?alt=media&token=ba86cf10-7a25-4207-84bb-22284cb42f17",
        "link": "https://www.youtube.com/watch?v=nh4nzZza4yE",
        "discount": "0",
        "price": "150",
        "pricediscount": "150",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD015",
        "sku": "SKU015",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU015.jpg?alt=media&token=42674da3-32d5-4fc4-b3c8-0a6a16a90d2c",
        "link": "https://www.youtube.com/watch?v=3n5elf-FRs8",
        "discount": "5",
        "price": "50",
        "pricediscount": "47.5",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD016",
        "sku": "SKU016",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU016.jfif?alt=media&token=49f8ad6f-2f3b-4a28-b9d9-467be5ee0599",
        "link": "https://www.youtube.com/watch?v=2WXXQDuoFLE",
        "discount": "0",
        "price": "50",
        "pricediscount": "50",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD017",
        "sku": "SKU017",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU017.jpg?alt=media&token=96e3d8d1-ee9b-47d7-9220-6bfc6da9ac95",
        "link": "https://www.youtube.com/watch?v=ydACV5lJ0pA",
        "discount": "10",
        "price": "80",
        "pricediscount": "72",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD018",
        "sku": "SKU018",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU018.jpg?alt=media&token=56af37a2-8116-4afe-9e8b-ca41da64fa43",
        "link": "https://www.youtube.com/watch?v=0CAVVqE6RGM",
        "discount": "0",
        "price": "90",
        "pricediscount": "90",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD019",
        "sku": "SKU019",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU019.jpg?alt=media&token=8f7d7ef8-3a0e-483c-b373-0bcdaa1965a6",
        "link": "https://www.youtube.com/watch?v=j8VQkRwTNIs",
        "discount": "5",
        "price": "60",
        "pricediscount": "57",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    },
    {
        "productid": "PD020",
        "sku": "SKU020",
        "barcode": "Bar001",
        "photourl": "https://firebasestorage.googleapis.com/v0/b/poompuangphase1.appspot.com/o/PP_Product%2FSKU020.jpg?alt=media&token=78c17dd0-c348-43a3-892d-3818c5f62817",
        "link": "https://www.youtube.com/watch?v=LFIBeqlExu8",
        "discount": "0",
        "price": "80",
        "pricediscount": "80",
        "createdAt": "2021-02-19 15:25:07Z",
        "updatedAt": "2021-02-19 15:25:07Z"
    }
     ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('mockup_productUniqs', null, {});
     */
  }
};
