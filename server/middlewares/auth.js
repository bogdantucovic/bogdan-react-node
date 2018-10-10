const isEmpty = require('lodash/isEmpty');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config').jwtSecret;
const User = require('../database/user');

module.exports = (req, res, next) => {
  const { method } = req;
  const errResponse = {
    success: false, 
    noAuthenticated: true
  }

  if (!req.headers.authorization) {
    return res.json(errResponse).end();
  }
 
  const token = req.headers.authorization.split(' ')[1];

  return jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) { 
      return res.json(errResponse).end(); 
    }

    const userId = decoded.sub;

    User.findById(userId)
      .then(user => {
        if (isEmpty(user)) {
          return res.json(errResponse).end();
        } else {
          return next();
        }
      })
      .catch(err =>  res.json(errResponse).end())
  });
};