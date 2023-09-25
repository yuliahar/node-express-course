const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`
      <h1>Welcome to the Home page!</h1>
      <a href="/about">About</a>
    `);
  } else if (req.url === '/about') {
    res.end(`
      <h1>This is the About page!</h1>
      <a href="/">Home</a>
    `);
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>Page not found!</p>
      <a href="/">Back to the Home page</a>
    `);
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
