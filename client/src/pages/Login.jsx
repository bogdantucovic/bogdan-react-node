import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { loginErrorsSelector } from '../selectors/loginSelectors';
import { loginStart, loginError } from '../actions/loginActions';
import LoginRegisterValidation from '../../../utils/LoginRegisterValidation';

// components
import MetaData from '../components/MetaData/';
import LoginForm from '../components/LoginForm/';

class LoginScene extends Component {
  state = {
    email: '',
    password: ''
  }

  onValidate(emailValue, passwordValue) {
    const email = LoginRegisterValidation.emailValidation(emailValue);
    const password = LoginRegisterValidation.passwordValidation(passwordValue);

    this.props.loginError({ email, password });

    return [email, password].some(err => err);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const isErrors = this.onValidate(email, password);
   
    if (isErrors) {
      return;
    }

    this.props.loginStart({ email, password });
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    this.setState({ [name]: value });
  }

  render() {
    const { loginErrors } = this.props;
    const { password, email } = this.state;
    
    return(
      <Fragment>
        <LoginForm 
          email={email}
          password={password}
          errors={loginErrors}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
        <MetaData/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loginErrors: loginErrorsSelector(state)
})

const mapDispatchToProps = {
  loginStart,
  loginError
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LoginScene);

