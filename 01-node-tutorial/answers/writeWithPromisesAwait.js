// ********* TASK 1 **************
// 1. Create a program writeWithPromisesAwait.js.
// 2. This should use the fs.promises package.
// 3. Then create an async function called writer that writes three lines to a file,
// calling the writeFile function with await.
// Put the await statements inside of a try/catch block!
// 4. Create another async function called reader that reads the file with
// await readFile and logs the return from the await to the screen.
// 5. Now we want to call the two functions in order, first the writer, and the reader.
// But, be careful! These are asynchronous functions, so if you just call them,
// you don’t know what order they’ll occur in. And you can’t use await in your mainline code.
// 6. So, you write a third async function called readWrite. In that function,
// you call await reader and await writer.
// 7. Then test your code. The file you are writing should not be sent to github,
//  so you add the filename as another line to your .gitignore.
// *********************************

const { writeFile, readFile } = require('fs').promises;

const FILE_PATH = './temporary/week2.txt';
const NUMBER_LINES = 3;

async function writer(filename, numberOfLines) {
  try {
    await writeFile(filename, '');
    for (let i = 0; i < numberOfLines; i++) {
      await writeFile(filename, `Line ${i + 1} added to the file\n`, { flag: 'a' });
    }
    console.log(`==== LOG: Writing File: ${numberOfLines} lines have been added to the file. ====`);
  } catch (error) {
    console.log(`==== LOG: This error happened: ${error} ====`);
  }
}

async function reader(filename) {
  try {
    const fileContent = await readFile(filename, 'utf8');
    console.log('==== LOG: Reading File: ====');
    console.log(fileContent);
  } catch (error) {
    console.log(`==== LOG: This error happened: ${error} ====`);
  }
}

async function readWrite() {
  try {
    await writer(FILE_PATH, NUMBER_LINES);
    await reader(FILE_PATH);
  } catch (error) {
    console.log(`==== LOG: This error happened: ${error} ====`);
  }
}

readWrite();
