
const jwt = require('jsonwebtoken');

/**
 * Protects routes by verifying the JWT in Authorization header.
 */
module.exports = function (req, res, next) {
  const header = req.headers['authorization'];
  if (!header) {
    return res.status(401).json({ msg: 'No token, auth denied' });
  }
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;  // { id: userId }
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
