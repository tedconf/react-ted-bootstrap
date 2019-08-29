import { fireEvent, render } from '@testing-library/react';
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
  it('should render all options', () => {
    const { queryAllByTestId } = render(
      <Dropdown options={options} onClick={jest.fn()} />,
    );

    expect(queryAllByTestId('dropdownItem').length).toBe(3);
  });

  it('should register onClick functions passed as props', () => {
    const click = jest.fn();
    const { getAllByTestId } = render(
      <Dropdown options={options} onClick={click} />,
    );

    fireEvent.click(getAllByTestId('dropdownItem')[0]);
    expect(click).toHaveBeenCalled();
  });
});
