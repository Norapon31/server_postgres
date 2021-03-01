module.exports = (sequelize, DataTypes) => {
  const mockup_productDetail = sequelize.define('mockup_productDetail', {
    sku: DataTypes.STRING,
    productname: DataTypes.STRING,
    category: DataTypes.STRING,
    weight: DataTypes.STRING,
    benefit: DataTypes.STRING,
    content: DataTypes.STRING,
    recommendmenu: DataTypes.STRING,
    lng: DataTypes.STRING
  }, {});
  mockup_productDetail.associate = function(models) {
    // associations can be defined here

    mockup_productDetail.belongsTo(models.mockup_productUniq, {
      foreignKey: 'sku',
      targetKey: 'sku',
      as: 'productuniq',
    })

    mockup_productDetail.belongsTo(models.mockup_category1s, {
      foreignKey: 'category',
      targetKey: 'category',
    })

  };
  return mockup_productDetail;
};