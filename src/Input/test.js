import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import React from 'react';
import Input from './index';

configure({ adapter: new Adapter() });

describe('Input', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Input />).exists('input[type="text"]')).toBe(true);
  });

  it('should render the appropriate input type', () => {
    expect(shallow(<Input type="text" />).exists('input[type="text"]')).toBe(
      true,
    );
    expect(
      shallow(<Input type="password" />).exists('input[type="password"]'),
    ).toBe(true);
    expect(shallow(<Input type="textarea" />).exists('textarea')).toBe(true);
  });

  it('should register onChange functions passed as props', () => {
    const change = jest.fn();
    const wrapper = mount(<Input onChange={change} />);

    wrapper.simulate('change', { target: { value: 'Test' } });
    expect(change).toHaveBeenCalled();
  });

  it('should register onBlur functions passed as props', () => {
    const blur = jest.fn();
    const wrapper = mount(<Input onBlur={blur} />);

    wrapper.simulate('blur');
    expect(blur).toHaveBeenCalled();
  });

  it('should register onFocus functions passed as props', () => {
    const focus = jest.fn();
    const wrapper = mount(<Input onFocus={focus} />);

    wrapper.simulate('focus');
    expect(focus).toHaveBeenCalled();
  });
});
