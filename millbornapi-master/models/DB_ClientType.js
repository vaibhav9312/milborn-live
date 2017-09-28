/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_ClientType', {
    ClientTypeId: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ClientType: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    ClientTypeDescription: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ModifiedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ModifiedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'DB_ClientType',
    timestamps: false
  });
};
