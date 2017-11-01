/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_ProductSubCategory', {
    SubCategoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SubCategory: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SubCategoryImage:{
      type: DataTypes.STRING(90),
      allowNull:true
    }
  }, {
    tableName: 'DB_ProductSubCategory',
    timestamps: false
  });
};
