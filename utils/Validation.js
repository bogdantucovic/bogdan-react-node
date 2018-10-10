const validator = require('validator');

class Validation {

  static isEmailValid(email) {
    return validator.isEmail(email);
  }

  static isPasswordValid(password) {
    return validator.isLength(password, { min: 6 });
  }

}

module.exports = Validation;