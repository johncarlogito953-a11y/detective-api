// Model for the game_sessions table.
'use strict';

module.exports = (sequelize, DataTypes) => {
  const GameSession = sequelize.define('GameSession', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    session_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    started_at: {
      type: DataTypes.DATE,
    },
    ended_at: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'game_sessions',
    timestamps: true,
    underscored: false,
  });

  GameSession.associate = (models) => {
    GameSession.hasMany(models.Seat, { foreignKey: 'game_session_id' });
  };

  return GameSession;
};
