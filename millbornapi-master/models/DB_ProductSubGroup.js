/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_ProductSubGroup', {
    SubGroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SubGroup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    GroupId: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SubGroupImage:{
      type: DataTypes.STRING(90),
      allowNull:true
    }
  }, {
    tableName: 'DB_ProductSubGroup',
    timestamps: false
  });
};
