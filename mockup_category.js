module.exports = (sequelize, DataTypes) => {
  const Mockup_categories = sequelize.define('Mockup_categories', {
    categoryid: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Mockup_categories.associate = function(models) {
    // associations can be defined here
    Mockup_categories.hasMany(models.Mockup_productDetail, {
      foreignKey: 'category',
      sourceKey: 'category',
      as: 'productcate_detail',
    })

  };
  return Mockup_categories;
};