const express = require('express');
const passport = require('passport');
const LoginRegisterValidation = require('../../utils/LoginRegisterValidation');
const RegisterValidation = require('../../utils/RegisterValidation');
const router = new express.Router();

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  const emailError = LoginRegisterValidation.emailValidation(email);
  const passwordError = LoginRegisterValidation.passwordValidation(password);
  
  if (emailError || passwordError) {
    const errors = {
      email: emailError,
      password: passwordError
    };

    return res.json({
      errors
    })
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      return res.json({
        errors: {
          [err.type] : err.name
        }
      });
    }
    return res.json({
      token,
      successMsg: 'loginSuccessful',
      user: userData
    });
  })(req, res, next);
});

router.post('/register', (req, res, next) => {
  const { email, password, name } = req.body;

  const emailError = LoginRegisterValidation.emailValidation(email);
  const passwordError = LoginRegisterValidation.passwordValidation(password);
  const nameError = RegisterValidation.nameValidation(name);

  if (emailError || passwordError || nameError) {
    const errors = {
      email: emailError,
      password: passwordError,
      name: nameError
    };

    return res.json({
      errors
    })
  }

  return passport.authenticate('local-register', (err) => {
    
    if (err) {
      if (err.errno === 1062) {
        return res.json({
          errors: {
            email: 'duplicateEmail'
          }
        });
      }
      return res.json({
        errors: {
          global: 'unknown'
        }
      });
    }

    return res.json({
      successMsg: 'registrationSuccessful'
    });
  })(req, res, next);
});

module.exports = router;
