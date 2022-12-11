const { Sequelize } = require("sequelize");

exports.connectToDb = async () => {
  const sequelize = new Sequelize("postgres://postgres:password@db:5432/tasks");

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
