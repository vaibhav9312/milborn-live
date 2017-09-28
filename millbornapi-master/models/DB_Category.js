/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_Category', {
    CategoryId: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    CategoryDescription: {
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
    tableName: 'DB_Category',
    timestamps: false
  });
};
