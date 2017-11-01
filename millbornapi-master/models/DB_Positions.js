module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_Positions', {
    PositionId: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Position: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    Image: {
      type: DataTypes.INTEGER(90),
      allowNull: true
    },
    PositionText: {
      type: DataTypes.INTEGER(150),
      allowNull: true
    }
  }, {
    tableName: 'DB_Positions',
    timestamps: false
  });
};
