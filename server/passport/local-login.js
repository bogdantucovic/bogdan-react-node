const isEmpty = require('lodash/isEmpty');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config').jwtSecret;
const PassportLocalStrategy = require('passport-local').Strategy;
const User = require('../database/User');

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {

  User.findByEmail(email)
    .then(user => {
     
      const noUser = isEmpty(user);
      if (noUser) {
        const error = {
          name: 'incorrectEmailPassword',
          type: 'global'
        }
        return done(error);
      } 

      user = Object.values(JSON.parse(JSON.stringify(user)))[0];
      const { password: userPassword, id, name, email } = user
      
      const isMatch = User.comparePassword(password, userPassword);
    
      if (!isMatch) {
        const error = {
          name: 'incorrectPassword',
          type: 'password'
        }
        return done(error);
      }

      const payload = { sub: id };
      const token = jwt.sign(payload, jwtSecret);
      const userData = { id, name, email };

      return done(null, token, userData);
    })
    .catch(() => {
      const error = {
        name: 'unknown',
        type: 'global'
      }
      done(error);
    })
});

