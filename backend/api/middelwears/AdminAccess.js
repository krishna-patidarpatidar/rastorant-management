const jwt = require('jsonwebtoken');
require ('dotenv').config();

const AdminUser = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send({ status: 'ERR', message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req._id = decoded.id._id; 
    req.user= decoded.id;
    console.log(decoded.id)
    next();
  } catch (error) {
    return res.status(401).send({ status: 'ERR', message: 'Unauthorized access' });
  }
};

module.exports = AdminUser;
