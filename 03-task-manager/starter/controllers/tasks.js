const Task = require("../models/Task");

const getAllTasks = async (req, res) => { // get all tasks
  const tasks = await Task.find({});

  res.send({
    success: true,
    tasks,
    amount: tasks.length
  });
}

const getTask = async (req, res) => { // get a single task
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  res.status(200).json({ task })
}

const createTask = async (req, res) => { // create a new task
  const task = await Task.create(req.body);
  res.status(201).send({
    success: true,
    message: "Task created successfully",
    task
  });
}

const updateTask = async (req, res) => { // update task
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID });
  task.name = req.body.name || task.name;
  task.completed = req.body.completed || task.completed;
  await task.save();

  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    task
  })
}

const deleteTask = async (req, res) => { // delete task
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID });

  await task.remove();
  res.status(200).json({
    success: true,
    message: "Task deleted successfully"
  });
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};