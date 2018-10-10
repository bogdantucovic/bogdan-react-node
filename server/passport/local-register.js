const PassportLocalStrategy = require('passport-local').Strategy;
const User = require('../database/User');

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {

  const userData = {
    name: req.body.name,
    email,
    password
  };
  
  User.save(userData)
    .then(res => {
      return done(null);
    })
    .catch(err => {
      return done(err);
    })
  
});
