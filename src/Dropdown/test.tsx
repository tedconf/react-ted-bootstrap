import React from 'react';
import Dropdown from './index';

const options = [
  {
    label: 'Yesterday',
  },
  {
    label: 'Today',
  },
  {
    label: 'Tomorrow',
  },
];

describe('Dropdown', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Dropdown options={options} />).exists('ul')).toBe(true);
  });

  it('should render all options', () => {
    const wrapper = mount(<Dropdown options={options} />);

    expect(wrapper.find('li').length).toBe(3);
  });

  it('should register onClick functions passed as props', () => {
    const click = jest.fn();
    const wrapper = mount(<Dropdown options={options} onClick={click} />);

    wrapper
      .find('li')
      .first()
      .simulate('click');
    expect(click).toHaveBeenCalled();
  });
});
