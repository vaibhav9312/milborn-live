/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_ClientMainItems', {
    MainItemsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MainItemName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ClientTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'DB_ClientType',
        key: 'ClientTypeId'
      }
    }
  }, {
    tableName: 'DB_ClientMainItems',
    timestamps: false
  });
};
