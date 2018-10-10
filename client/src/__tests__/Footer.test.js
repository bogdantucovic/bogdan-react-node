import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../components/Footer/';

describe('<Footer/>', () => {
  const wrapper = shallow(<Footer/>);

  it('render', () => {
    expect(wrapper).toMatchSnapshot()
  });
});