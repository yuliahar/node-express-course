// alternative-flavor.js should export multiple values in the module.exports object,
// but it should use the alternative approach, adding each value one at a time.

module.exports.departments = ['books', 'shoes', 'clothes']
const salePerson = {
  name: 'John Doe',
  age: 25
}

module.exports.shopAssistant = salePerson