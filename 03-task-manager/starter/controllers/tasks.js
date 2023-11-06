const Task = require("../models/Task");
const mongoose = require('mongoose');
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => { // get all tasks
  const tasks = await Task.find({});
  res.status(200).json({
    success: true,
    tasks,
    amount: tasks.length
  });
});

const getTask = asyncWrapper(async (req, res, next) => { // get a single task
  const { id: taskID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return next(createCustomError(`Invalid id : ${taskID}`, 400));
  }

  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    // test with: http://localhost:5000/api/v1/tasks/65370b491c66b746be09fd99
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => { // create a new task
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required"
    });
  }

  const task = await Task.create(req.body);
  res.status(201).send({
    success: true,
    message: "Task created successfully",
    task
  });
});

const updateTask = asyncWrapper(async (req, res, next) => { // update task
  const { id: taskID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return next(createCustomError(`Invalid id : ${taskID}`, 400));
  }
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true
  });

  if (!task) {
    // test with: http://localhost:5000/api/v1/tasks/65370b491c66b746be09fd99
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    task
  });
});

const deleteTask = asyncWrapper(async (req, res, next) => { // delete task
  const { id: taskID } = req.params

  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return next(createCustomError(`Invalid id : ${taskID}`, 400));
  }

  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  await task.remove();
  res.status(200).json({
    success: true,
    message: "Task deleted successfully"
  });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};