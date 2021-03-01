module.exports = (sequelize, DataTypes) => {
  const mockup_productUniq = sequelize.define('mockup_productUniq', {
    productid: DataTypes.STRING,
    sku: DataTypes.STRING,
    barcode: DataTypes.STRING,
    photourl: DataTypes.STRING,
    link: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    pricediscount: DataTypes.FLOAT
  }, {});
  mockup_productUniq.associate = function(models) {
    // associations can be defined here
    mockup_productUniq.hasMany(models.mockup_productDetail, {
      foreignKey: 'sku',
      sourceKey: 'sku'
    })
  };
  return mockup_productUniq;
};