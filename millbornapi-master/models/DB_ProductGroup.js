/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_ProductGroup', {
    GroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Group: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    GroupImage:{
      type: DataTypes.STRING(90),
      allowNull:true
    }
  }, {
    tableName: 'DB_ProductGroup',
    timestamps: false
  });
};
