import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Select from './index';

configure({ adapter: new Adapter() });

describe('Select', () => {
  it('should render without throwing an error', () => {
    expect(shallow(
      <Select label="Test">
        <Select.Item>Testing</Select.Item>
      </Select>,
    ).exists(<button>Test</button>)).toBe(true);
  });

  it('should register onChange function passed as props', () => {
    const change = jest.fn();
    const wrapper = mount(
      <Select label="Test" onChange={change}>
        <Select.Item>Testing</Select.Item>
      </Select>
    );


    wrapper.find('button').simulate('click');
    wrapper.find('li').simulate('click');
    expect(change).toHaveBeenCalled();
  });
});
