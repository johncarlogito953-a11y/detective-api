// Model for the seats table (one seat per account per game).
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define('Seat', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    tableName: 'seats',
    timestamps: true,
    underscored: false,
  });

  Seat.associate = (models) => {
    Seat.belongsTo(models.User, { foreignKey: 'user_id' });
    Seat.belongsTo(models.GameSession, { foreignKey: 'game_session_id' });
  };

  return Seat;
};
