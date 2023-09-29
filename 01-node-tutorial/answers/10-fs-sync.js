// **** TASK ****
// Write fs - sync.js.This should load writeFileSync and readFileSync from the fs module.
// Then use writeFileSync to write 3 lines to a file, ./ temporary / fileA.txt,
// using the append flag for each line after the first.
// Then use readFileSync to read the file, and log the contents to the console.
// Be sure you create the file in the temporary directory.
// That will ensure that it isn’t pushed to github when you submit your answers.

const { readFileSync, writeFileSync } = require('fs');

writeFileSync('./temporary/fileA.txt', ''); // create file

for (let i = 0; i < 3; i++) {
  writeFileSync('./temporary/fileA.txt', `Line ${i + 1}\n`, { flag: 'a' });
}

const fileA = readFileSync('./temporary/fileA.txt', 'utf8');
console.log(fileA); // Line 1 Line 2 Line 3