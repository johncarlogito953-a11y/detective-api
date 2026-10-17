// ONE Sequelize instance (one connection pool) for the whole API.
// Every other file imports it from here - nobody opens a second one.
const { Sequelize, DataTypes } = require('sequelize');
const env = require('../config/env');
const dbConfig = require('../config/database')[env.nodeEnv];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

// Load models (Week 11) and wire up their associations.
const User = require('./user')(sequelize, DataTypes);
const GameSession = require('./game-session')(sequelize, DataTypes);
const Question = require('./question')(sequelize, DataTypes);
const Seat = require('./seat')(sequelize, DataTypes);

User.associate({ Seat });
GameSession.associate({ Seat });
Seat.associate({ User, GameSession });

module.exports = { sequelize, Sequelize, DataTypes, User, GameSession, Question, Seat };
