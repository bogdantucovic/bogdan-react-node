import React from 'react';
import { shallow } from 'enzyme';

import RegisterForm from '../components/RegisterForm/';
import { RegistrationScene } from '../pages/Registration';

describe('<Registration/>', () => {

  it('check input change', () => {

    const wrapper = shallow(<RegistrationScene/>);
    wrapper.setState({ name: "" });
    wrapper.setState({ email: "" });
    wrapper.setState({ password: "" });
    const password = 'tuco';
    const name = 'Bogdan';
    const email = '1bogdantucovic@gmail.com';
    
    let nameInput = wrapper.find(RegisterForm);
    nameInput.simulate('change', { target: { value: name, name: 'name' }});
    nameInput.simulate('change', { target: { value: password, name: 'password' }});
    nameInput.simulate('change', { target: { value: email, name: 'email' }});
    
    expect(wrapper.state().name).toBe(name);
    expect(wrapper.state().password).toBe(password);
    expect(wrapper.state().email).toBe(email);
  });
});