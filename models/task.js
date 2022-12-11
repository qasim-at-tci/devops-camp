const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define(
    "tasks",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: true }
  );

  return Task;
};
