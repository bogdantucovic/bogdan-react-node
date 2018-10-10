const validator = require('validator');

class RegisterValidation {
  static nameValidation(value) {
    const isNameValid = validator.isLength(value, { min: 2, max: 30 }) 
                        && validator.isAlpha(value);
    
    return isNameValid ? '' : 'nameInvalid';
  }
}

module.exports = RegisterValidation;