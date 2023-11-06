class CustomAPIError extends Error {
  constructor(message, statusCode, success) {
    super(message);
    this.statusCode = statusCode;
    this.success = success;
  }
}

const createCustomError = (msg, statusCode, success = false) => {
  return new CustomAPIError(msg, statusCode, success);
};

module.exports = {
  createCustomError,
  CustomAPIError
};