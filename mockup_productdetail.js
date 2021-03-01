module.exports = (sequelize, DataTypes) => {
  const Mockup_productDetail = sequelize.define('Mockup_productDetail', {
    sku: DataTypes.STRING,
    productname: DataTypes.STRING,
    category: DataTypes.STRING,
    weight: DataTypes.STRING,
    benefit: DataTypes.FLOAT,
    content: DataTypes.FLOAT,
    recommendmenu: DataTypes.FLOAT
  }, {});
  Mockup_productDetail.associate = function(models) {
    // associations can be defined here
    Mockup_productDetail.belongsTo(models.Mockup_productUniq, {
      foreignKey: 'sku',
      targetKey: 'sku',
      as: 'productuniq',
    })

    Mockup_productDetail.belongsTo(models.Mockup_categories, {
      foreignKey: 'category',
      targetKey: 'category',
      
    })

  };
  return Mockup_productDetail;
};