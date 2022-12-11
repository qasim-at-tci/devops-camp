const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:password@db:5432/tasks");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("../models/task")(sequelize, Sequelize);

module.exports = db;
