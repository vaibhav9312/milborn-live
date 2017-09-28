/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_Roles', {
    RoleId: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RoleName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    RoleDescription: {
      type: DataTypes.STRING(128),
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
    tableName: 'DB_Roles',
    timestamps: false
  });
};
