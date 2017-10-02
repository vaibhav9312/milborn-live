module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DB_ProductSubCategory', {
      SubCategoryId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      SubCategory: {
        type: DataTypes.STRING(64),
        allowNull: false
      },
      CategoryId: {
        type: DataTypes.STRING(64),
        allowNull: false
      }
    }, {
      tableName: 'DB_ProductSubCategory',
      timestamps: false
    });
  };
  