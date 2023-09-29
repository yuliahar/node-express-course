// **** TASK ****
// Write path.js. This should load the path module, which is another built in module.
// It should then call path.join to join up a sequence of alphanumeric strings,
// and it should print out the result. The result will work one way on Windows,
// where the directory separator is a backslash, and a different way on other platforms,
// where the directory separator is a slash.

const path = require('path');

console.log(path.sep); // / on Mac, \ on Windows

const pathJoin = path.join('content', 'subfolder', 'test.txt');
console.log(pathJoin); // content/subfolder/test.txt

const pathBase = path.basename(pathJoin);
console.log(pathBase); // test.txt

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutePath); // /Users/.../01-node-tutorial/content/subfolder/test.txt

const pathParse = path.parse(absolutePath);
console.log(pathParse); // { root: '/', dir: '/Users/.../01-node-tutorial/content/subfolder', base: 'test.txt', ext: '.txt', name: 'test' }

