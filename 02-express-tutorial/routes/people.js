const express = require('express');
const router = express.Router();

const { addPerson, getPeople } = require('../controllers/people');

router.route('/').get(getPeople).post(addPerson);
// router.get('/', getPeople)
// router.post('/', addPerson)

module.exports = router;