/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_State', {
    StateId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StateName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    CountryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'DB_Country',
        key: 'CountryId'
      }
    }
  }, {
    tableName: 'DB_State',
    timestamps: false
  });
};
