const boom = require('@hapi/boom');
const { apiKey } = require('../../utils/config');

function checkApiKey(req, res, next) {
  const userApiKey = req.headers['api'];
  if (userApiKey === apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { checkApiKey };
