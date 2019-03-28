import React from 'react';
import { fireEvent, render } from 'react-testing-library';
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
  it('should render all options', () => {
    const { queryAllByTestId } = render(
      <Dropdown options={options} onClick={jest.fn()} />,
    );

    expect(queryAllByTestId('dropdownItem').length).toBe(3);
  });

  it('should register onClick functions passed as props', () => {
    const click = jest.fn();
    const { getByTestId } = render(
      <Dropdown options={options} onClick={click} />,
    );

    fireEvent.click(getByTestId('dropdownItem'));
    expect(click).toHaveBeenCalled();
  });
});
