const express = require("express");
const { health } = require("../controllers/health");
const {
  allTasks,
  task,
  createTodoTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
} = require("../controllers/tasks");
const Router = express.Router();

Router.get("/health", health);

Router.route("/tasks")
  .get(allTasks)
  .post(createTodoTask)
  .delete(deleteAllTasks);

Router.route("/tasks/:id").get(task).patch(updateTask).delete(deleteTask);

module.exports = Router;
