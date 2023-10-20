let { products } = require('../data');

const searchProducts = (req, res) => {
  let { search, limit, minPrice, maxPrice } = req.query;
  let sortedProducts = [...products];

  // Check if search query contains special regex characters
  const hasSpecialChars = /[\\^$*+?.()|[\]{}]/.test(search);

  if (hasSpecialChars) {
    // http://localhost:3000/api/v1/query?search=^al&limit=5
    // http://localhost:3000/api/v1/query?search=a$&limit=5
    try {
      const regex = new RegExp(search, 'i'); // 'i' for case-insensitive
      sortedProducts = sortedProducts.filter((product) => regex.test(product.name));
    } catch (e) {
      // http://localhost:3000/api/v1/query?search=*&limit=5
      return res.json({ success: false, message: "Invalid regular expression." });
    }
  } else {
    // http://localhost:3000/api/v1/query?search=al&limit=5
    sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search));
  }

  if (minPrice) {
    if (!isNaN(minPrice)) {
      // http://localhost:3000/api/v1/query?search=al&limit=5&minPrice=10
      sortedProducts = sortedProducts.filter((product) => product.price >= Number(minPrice));
    } else {
      // http://localhost:3000/api/v1/query?search=al&limit=5&minPrice=a
      return res.json({ success: false, message: "Please enter a valid minimum price." });
    }
  }

  if (maxPrice) {
    if (!isNaN(maxPrice)) {
      // http://localhost:3000/api/v1/query?search=al&limit=5&minPrice=10&maxPrice=20
      sortedProducts = sortedProducts.filter((product) => product.price <= Number(maxPrice));
    } else {
      // http://localhost:3000/api/v1/query?search=al&limit=5&minPrice=10&maxPrice=d
      return res.json({ success: false, message: "Please enter a valid maximum price." });
    }
  }

  // http://localhost:3000/api/v1/query?search=al&limit=2
  if (limit && Number(limit) > 0) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  } else {
    // http://localhost:3000/api/v1/query?search=al&limit=d
    return res.json({ success: true, message: "Please enter a limit number greater than 0." });
  }

  // http://localhost:3000/api/v1/query?search=3&limit=2
  if (sortedProducts.length < 1) {
    return res.json({ success: true, message: "No products matched your search." });
  }

  res.json(sortedProducts);
};

module.exports = {
  searchProducts,
};