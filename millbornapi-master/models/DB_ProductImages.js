/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_ProductImages', {
    ProductImageId: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ImageUrl: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    ModifiedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    }
  }, {
    tableName: 'DB_ProductImages',
    timestamps: false
  });
};
