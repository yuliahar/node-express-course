// TASK 2: Create a new file called globals.js
// This program should use console.log to write some globals to the screen.
// Set an environment variable with the following command:
// export MY_VAR = "Hi there!"
// The program should then use console.log to print out the values of __dirname(a global)
// and process.env.MY_VAR(process is also a global, and contains the environment variables you set.)
// You could print out other globals as well.
// For each of these programs, you invoke them with node to make sure they work.

// GLOBALS

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// TO RUN THIS FILE:
// export MY_VAR='Hi there!'
// node globals.js

// Print the value of __dirname
console.log("__dirname:", __dirname);

// Print the value of process.env.MY_VAR
console.log("process.env.MY_VAR:", process.env.MY_VAR);

// Print the value of process.env.USER
console.log("process.env.USER:", process.env.USER);

// Print the value of __filename
console.log("__filename:", __filename);

