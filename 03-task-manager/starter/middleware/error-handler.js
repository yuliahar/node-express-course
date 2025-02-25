const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      success: err.success,
      msg: err.message
    })
  }
  return res.status(err.status).json({ msg: 'Something went wrong, please try again', err })
}

module.exports = errorHandlerMiddleware