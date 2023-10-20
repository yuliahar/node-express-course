let { people } = require('../data');

const findPersonById = (id) => {
  return people.find((person) => person.id === Number(id));
};

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
}

const addPerson = (req, res) => {
  const { name } = req.body;

  if (name) {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  } else {
    res.status(400).json({ success: false, message: 'Please provide a name' });
  }
};

const getPerson = (req, res) => {
  const { id } = req.params;
  const person = findPersonById(id);

  if (!person) {
    return res.status(404).json({ success: false, message: `Person with id ${id} not found` });
  }
  res.status(200).json({ success: true, data: person });
}

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = findPersonById(id);

  if (!person) {
    return res.status(404).json({ success: false, message: `Person with id ${id} not found` });
  }
  if (!name) {
    return res.status(400).json({ success: false, message: 'Please provide a name' });
  }
  person.name = name;
  res.status(200).json({ success: true, data: person });
}

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = findPersonById(id);

  if (!person) {
    return res.status(404).json({ success: false, message: `Person with id ${id} not found` });
  }
  people = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, data: people });
}

module.exports = {
  getPeople,
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
};