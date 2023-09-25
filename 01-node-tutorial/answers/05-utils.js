// utils.js should export a single value, which is a function you call in modules.js.

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
}

module.exports = sayHi;