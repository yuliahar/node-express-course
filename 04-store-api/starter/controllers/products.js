const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const search = 'a';

  const products = await Product.find({
    // featured: true,
    name: { $regex: search, $options: 'i' },
    price: { $gt: 30 },
  }).select('name price').sort('price').limit(5);
  res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async (req, res) => {
  const { name, featured, company, sort, fields, numericFilters } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  let result = Product.find(queryObject);

  // sorting & field limiting
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }

  // pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
}

module.exports = {
  getAllProductsStatic,
  getAllProducts,
}