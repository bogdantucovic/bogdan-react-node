import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import LoginRegisterValidation from '../../../utils/LoginRegisterValidation';
import RegisterValidation from '../../../utils/RegisterValidation';
import { registrationStart, registrationError } from '../actions/registrationActions';
import { 
  registrationSuccessMsgSelector, 
  registrationErrorsSelector 
} from '../selectors/registrationSelectors';

// components
import MetaData from '../components/MetaData/';
import RegisterForm from '../components/RegisterForm/';

class RegistrationScene extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.successMsg) {
      this.props.history.push('/login');
    }
  }

  onValidate(nameValue, emailValue, passwordValue) {
    const email = LoginRegisterValidation.emailValidation(emailValue);
    const password = LoginRegisterValidation.passwordValidation(passwordValue);
    const name = RegisterValidation.nameValidation(nameValue);

    this.props.registrationError({ name, email, password });

    return [name, email, password].some(err => err);
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const isErrors = this.onValidate(name, email, password);
    
    if (isErrors) {
      return;
    }
    
    this.props.registrationStart({ email, name, password });
  }

  render() {
    const { errors } = this.props;
    const { name, email, password } = this.state;
 
    return(
      <Fragment>
        <MetaData/>
        <RegisterForm
          name={name} 
          email={email} 
          password={password} 
          errors={errors}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </Fragment>
    )
  }
}

RegistrationScene.defaultProps = {
  errors: {
    name: '',
    email: '',
    password: '',
    global: ''
  },
  successMsg: '',
  registrationStart: function () {},
  registrationError: function () {}
}

const mapStateToProps = state => ({
  errors: registrationErrorsSelector(state),
  successMsg: registrationSuccessMsgSelector(state)
})

const mapDispatchToProps = {
  registrationStart,
  registrationError
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(RegistrationScene);

export { RegistrationScene };

