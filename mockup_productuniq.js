module.exports = (sequelize, DataTypes) => {
  const Mockup_productUniq = sequelize.define('Mockup_productUniq', {
    productid: DataTypes.STRING,
    sku: DataTypes.STRING,
    barcode: DataTypes.STRING,
    photourl: DataTypes.STRING,
    link: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    pricediscount: DataTypes.FLOAT
  }, {});
  Mockup_productUniq.associate = function(models) {
    // associations can be defined here
    Mockup_productUniq.hasMany(models.Mockup_productDetail, {
      foreignKey: 'sku',
      sourceKey: 'sku'
    })
  };
  return Mockup_productUniq;
};