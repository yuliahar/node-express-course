const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');

// Import routers
const peopleRouter = require('./routes/people');
const productsRouter = require('./routes/products');
const searchRouter = require('./routes/search');
const authRouter = require('./routes/auth');

const app = express();

// Middleware for static assets and parsing
app.use(express.static('./methods-public'));  // Static assets
app.use(express.urlencoded({ extended: false }));  // Parse form data
app.use(express.json());  // Parse JSON
app.use(cookieParser());  // Parse cookies

// Custom middleware
app.use(logger);

// Test route with auth middleware
app.get('/api/v1/test', auth, (req, res) => {
  const { name } = req.cookies;
  res.status(200).json({
    message: `Welcome, ${name}!`
  });
});

// API routes
app.use('/api/v1/people', peopleRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/query', searchRouter);
app.use('/api/v1/auth', authRouter);

// Catch-all for 404
app.all('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
