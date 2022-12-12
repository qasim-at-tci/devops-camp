const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/tasks`
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("../models/task")(sequelize, Sequelize);

module.exports = db;
