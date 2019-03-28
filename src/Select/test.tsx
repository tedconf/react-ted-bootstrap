import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import Select from './index';

describe('Select', () => {
  it('should render without throwing an error', () => {
    render(
      <Select label="Test">
        <Select.Item value="one">Testing</Select.Item>
      </Select>,
    );
  });

  it('should register onChange function passed as props', () => {
    const change = jest.fn();
    const { getByTestId } = render(
      <Select label="Test" onChange={change}>
        <Select.Item value="testing">Testing</Select.Item>
      </Select>,
    );

    fireEvent.click(getByTestId('select'))
    fireEvent.click(getByTestId('item-testing'));
    expect(change).toHaveBeenCalled();
  });
});
