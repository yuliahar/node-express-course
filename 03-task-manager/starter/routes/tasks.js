const express = require('express');
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');
const router = express.Router();

// routes
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;