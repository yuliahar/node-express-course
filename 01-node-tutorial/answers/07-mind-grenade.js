// mind-grenade.js may not export anything, but it should contain a function that logs something to the console.
// You should then call that function within the mainline of mind-grenade.js.
// This is to demonstrate that when a module is loaded with a require statement,
// anything in the mainline code of the loaded module runs.

const mindGrenade = () => {
  console.log('This is a mind grenade');
}

mindGrenade();