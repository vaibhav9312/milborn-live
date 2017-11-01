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
      allowNull: true
    },
    SubGroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CategoryImage:{
      type: DataTypes.STRING(90),
      allowNull:true
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    ModifiedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ModifiedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    }
  }, {
    tableName: 'DB_Category',
    timestamps: false
  });
};
