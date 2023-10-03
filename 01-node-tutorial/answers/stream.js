const { createReadStream } = require('fs');

const FILE_PATH = '../content/big.txt';

function processFile(file = FILE_PATH, highWaterMark = 200) {
  try {
    const readStream = createReadStream(file, { encoding: 'utf8', highWaterMark });

    let chunkCounter = 0;

    readStream.on('data', (chunk) => {
      // console.log({ chunk });
      chunkCounter++;
      console.log(`Received chunk #${chunkCounter}`);
    });

    readStream.on('end', () => {
      console.log(`Finished reading. Total chunks received: ${chunkCounter}`);
    });

    readStream.on('error', (error) => {
      console.error(`Error reading the file: ${error}`);
    });
  } catch (error) {
    console.error(`Error reading the file: ${error}`);
  }
}

console.log('Testing with highWaterMark = 200');
processFile();

console.log('Testing with highWaterMark = 500');
processFile(FILE_PATH, 500);

console.log('Testing with highWaterMark = 1000');
processFile(FILE_PATH, 1000);

console.log('Testing error handling with a non-existing file');
processFile('../content/small.txt');

console.log('Testing error handling with an invalid highWaterMark');
processFile(FILE_PATH, 'abc');
