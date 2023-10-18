let { products } = require('../data');

const getProducts = (req, res) => {
  res.status(200).json({ success: true, data: products });
};

const getProduct = (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id === Number(productID));
  if (!singleProduct) {
    return res.status(404).json({ success: false, message: `Product with id ${productID} not found` });
  }
  res.status(200).json({ success: true, data: singleProduct });
}

module.exports = {
  getProducts,
  getProduct,
};