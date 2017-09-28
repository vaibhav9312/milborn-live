/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_City', {
    CityId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CityName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    StateId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'DB_State',
        key: 'StateId'
      }
    }
  }, {
    tableName: 'DB_City',
    timestamps: false
  });
};
