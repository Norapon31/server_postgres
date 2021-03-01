module.exports = (sequelize, DataTypes) => {
  const mockup_category2s = sequelize.define('mockup_category2s', {
    categoryid: DataTypes.STRING,
    categorytype_name: DataTypes.STRING,
    category: DataTypes.STRING,
    lng: DataTypes.STRING
  }, {});

  mockup_category2s.associate = function(models) {
    // associations can be defined here
    mockup_category2s.hasMany(models.mockup_category1s, {
      foreignKey: 'categoryid',
      sourceKey: 'categoryid',
      as:'cat1'
    })
  


  };
  return mockup_category2s;
};