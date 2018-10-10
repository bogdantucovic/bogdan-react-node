const Validation = require('./Validation');

class LoginRegisterValidation extends Validation {
  static emailValidation(email) {
    return this.isEmailValid(email) ? '' : 'emailInvalid';
  }

  static passwordValidation(password) {
    return this.isPasswordValid(password) ? '' : 'passwordInvalid';
  }
}

module.exports = LoginRegisterValidation;