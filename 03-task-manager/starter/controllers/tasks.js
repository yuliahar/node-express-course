const Task = require("../models/Task");

const getAllTasks = async (req, res) => { // get all tasks
  try {
    const tasks = await Task.find({});

    res.send({
      success: true,
      tasks,
      amount: tasks.length
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

const getTask = async (req, res) => { // get a single task
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
      // test with: http://localhost:5000/api/v1/tasks/65370b491c66b746be09fd99
      return res.status(404).json({
        success: false,
        message: `No task with id: ${taskID}`
      });
    }
    res.status(200).json({ task })
  } catch (err) {
    // test with: http://localhost:5000/api/v1/tasks/1
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

const createTask = async (req, res) => { // create a new task
  try {
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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

const updateTask = async (req, res) => { // update task
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true
    });

    if (!task) {
      // test with: http://localhost:5000/api/v1/tasks/65370b491c66b746be09fd99
      return res.status(404).json({
        success: false,
        message: `No task with id: ${taskID}`
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

const deleteTask = async (req, res) => { // delete task
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: `No task with id: ${taskID}`
      });
    }
    await task.remove();
    res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });
  } catch (err) {
    // test with: http://localhost:5000/api/v1/tasks/1
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};