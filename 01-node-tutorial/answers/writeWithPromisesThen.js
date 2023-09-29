// ************** TASK 5.2 ******************
// Write another program called writeWithPromisesThen.js.
// You start it the same way, but this time, you use the .then
// style of asynchronous programming. You don’t need to create any functions.
// Instead you just use cascading .then statements in your mainline
// Test your code. You may want to sprinkle console.log statements in
// your code so that you understand the order of execution.
// ******************************************

const { writeFile, readFile } = require('fs').promises;

const FILE_PATH = './temporary/week2.txt';

// clear file
writeFile(FILE_PATH, '')
  .then(() => {
    // write line 1
    // Return the promise so you can chain the .then statements
    return writeFile(FILE_PATH, 'Line 1 added to the file.\n', { flag: 'a' });
  })
  .then(() => {
    // write line 2
    return writeFile(FILE_PATH, 'Line 2 added to the file.\n', { flag: 'a' });
  })
  .then(() => {
    return writeFile(FILE_PATH, 'Line 3 added to the file.', { flag: 'a' });
  })
  // write the third line, and follow that with two more .then blocks,
  // one to call readFile to read it back out, and one to log the data to the screen
  .then(() => {
    return readFile(FILE_PATH, 'utf-8');
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("An error occurred: ", error)
  })