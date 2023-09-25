const names = require('./04-names');
const sayHi = require('./05-utils');
const { departments, shopAssistant } = require('./06-alternative-flavor');
require('./07-mind-grenade');

console.log(names);

sayHi('Susan');
sayHi(names.firstVariable);
sayHi(names.secondVariable);

console.log(departments);
console.log(shopAssistant);