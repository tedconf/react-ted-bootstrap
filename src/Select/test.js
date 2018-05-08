import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Select from './index';

configure({ adapter: new Adapter() });

describe('Select', () => {
  const options = [
    {
      label: 'Today',
      value: 'today',
    },
    {
      label: 'Yesterday',
      value: 'yesterday',
    },
  ];

  it('should render without throwing an error', () => {
    expect(shallow(<Select label="test" options={options} />).exists(<select />)).toBe(true);
  });

  it('should register onChange function passed as props', () => {
    const change = jest.fn();
    const wrapper = mount(<Select label="test" options={options} onChange={change} />);

    wrapper.find('select').simulate('change');
    expect(change).toHaveBeenCalled();
  });
});
