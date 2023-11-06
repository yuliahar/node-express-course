const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Path not found: ${req.originalUrl}`
  });
}

module.exports = notFound;