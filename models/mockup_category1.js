module.exports = (sequelize, DataTypes) => {
  const mockup_category1s = sequelize.define('mockup_category1s', {
    categoryid: DataTypes.STRING,
    category: DataTypes.STRING,
    lng: DataTypes.STRING
  }, {});
  mockup_category1s.associate = function(models) {
    // associations can be defined here
    mockup_category1s.hasMany(models.mockup_productDetail, {
      foreignKey: 'category',
      sourceKey: 'category',
      as: 'productdetail',
    })

    mockup_category1s.belongsTo(models.mockup_category2s, {
      foreignKey: 'categoryid',
      targetKey: 'categoryid',
    })

  };
  return mockup_category1s;
};