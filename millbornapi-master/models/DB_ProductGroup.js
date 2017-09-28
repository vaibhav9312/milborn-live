module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DB_ProductGroup', {
      GroupId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Group: {
        type: DataTypes.STRING(64),
        allowNull: false
      }
    }, {
      tableName: 'DB_ProductGroup',
      timestamps: false
    });
  };
  