const jwt = require('jsonwebtoken');
const config = require('../config');

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: 'Authentication failed' });
    return;
  }
  jwt.verify(token, config.secret, (error, decoded) => {
    if (error) {
      res.status(401).json({ message: 'Authentication failed' });
      return;
    }
    req.userId = decoded.id;
    next();
  });
};
