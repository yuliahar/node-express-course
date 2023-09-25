const { readFile, writeFile } = require('fs')

console.log("at start"); // not async, so this will run first
writeFile('./temporary/fileB.txt', '', (err, result) => {
  console.log('Empty file created');
  if (err) {
    console.log("This error happened: ", err);
  } else {
    writeFile('./temporary/fileB.txt', `Line 1\n`, (err, result) => {
      if (err) {
        console.log("This error happened: ", err);
      } else {
        console.log(`Line 1 written to file`);
        writeFile('./temporary/fileB.txt', `Line 2\n`, { flag: 'a' }, (err, result) => {
          if (err) {
            console.log("This error happened: ", err);
          } else {
            console.log(`Line 2 written to file`);
            writeFile('./temporary/fileB.txt', `Line 3\n`, { flag: 'a' }, (err, result) => {
              if (err) {
                console.log("This error happened: ", err);
              } else {
                console.log(`Line 3 written to file`);
                console.log('Callback hell');
              }
            });
          }
        });
      }
    })
  }
});
console.log('at end'); // not async, so this will run first