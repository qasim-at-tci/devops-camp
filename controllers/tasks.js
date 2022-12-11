const db = require("../models");

const Task = db.tasks;
const Op = db.Sequelize.Op;

exports.allTasks = (req, res) => {
  const tasks = Task.findAll().then((data) =>
    res.status(200).json({ data: data })
  );
};

exports.task = (req, res) => {
  const id = req.params.id;

  Task.findByPk(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find todo task with id ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving todo task with id " + id,
      });
    });
};

exports.createTodoTask = (req, res) => {
  // Validate request
  if (!req.body.body) {
    res.status(400).json({
      message: "Task body can not be empty!",
    });
    return;
  }

  const task = {
    body: req.body.body,
  };

  Task.create(task)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the todo task.",
      });
    });
};

exports.updateTask = (req, res) => {
  const id = req.params.id;

  Task.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Task was updated successfully.",
        });
      } else {
        res.json({
          message: `Cannot update task with id ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error updating task with id " + id,
      });
    });
};

exports.deleteTask = (req, res) => {
  const id = req.params.id;

  Task.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Task was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete task with id ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete task with id " + id,
      });
    });
};

exports.deleteAllTasks = (req, res) => {
  Task.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} todo tasks were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all tasks.",
      });
    });
};
