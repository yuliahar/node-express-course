require('dotenv').config();
require('express-async-errors');
const express = require('express');
const connectDB = require('./db/connect.js');
const productsRouter = require('./routes/products.js');
const notFoundMiddleware = require('./middleware/not-found.js');
const errorMiddleware = require('./middleware/error-handler.js');

const app = express();
// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

// products route
app.use('/api/v1/products', productsRouter);

// 404
app.use(notFoundMiddleware);

// error middleware
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // connect to db
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start();
