const jwt = require('jsonwebtoken');

const SECRET_KEY = '12345'

const createToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn:'120m'
  });
}

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = {
  createToken,
  verifyToken
};