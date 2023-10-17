const express = require('express');
const router = express.Router();

const { addPerson, getPeople } = require('../controllers/people.js')

router.get('/', (req, res) => {
  return getPeople(req, res);
});

router.post('/', (req, res) => {
  return addPerson(req, res);
});

module.exports = router;