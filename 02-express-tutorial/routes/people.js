const express = require('express');
const router = express.Router();

let { people } = require('../data');

router.get('/', (req, res) => {
  res.json({ success: true, data: people });
});

router.post('/', (req, res) => {
  const { name } = req.body;

  if (name) {
    people.push({ id: people.length, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  } else {
    res.status(400).json({ success: false, message: 'Please provide a name' });
  }
});

module.exports = router;