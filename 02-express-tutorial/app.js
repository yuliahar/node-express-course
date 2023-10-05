const { products } = require("./data");
const express = require('express');

const app = express();

// setup static and middleware
app.use(express.static("./public"));

// routes
app.get('/api/v1/test', (req, res) => {
  res.json({ message: "It worked!" });
});

app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "That product was not found." });
  }
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
