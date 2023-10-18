const express = require('express');
const logger = require('./logger');
const peopleRouter = require('./routes/people');
const productsRouter = require('./routes/products');
const searchRouter = require('./routes/search');


const app = express();

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use(logger);

app.get('/api/v1/test', (req, res) => {
  res.json({ message: "It worked!" });
});

app.use('/api/v1/people', peopleRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/query', searchRouter);

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
