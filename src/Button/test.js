import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './index';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Button>A Button</Button>).exists(<button>A Button</button>)).toBe(true)
  });

  it('should register onClick functions passed as props', () => {
    const click = jest.fn();
    const wrapper = mount(<Button onClick={click}>A Button</Button>);

    wrapper.simulate('click');
    expect(click).toHaveBeenCalled();
  });

  it('should register onBlur functions passed as props', () => {
    const blur = jest.fn();
    const wrapper = mount(<Button onBlur={blur}>A Button</Button>);

    wrapper.simulate('blur');
    expect(blur).toHaveBeenCalled();
  });

  it('should register onFocus functions passed as props', () => {
    const focus = jest.fn();
    const wrapper = mount(<Button onFocus={focus}>A Button</Button>);

    wrapper.simulate('focus');
    expect(focus).toHaveBeenCalled();
  });
});
