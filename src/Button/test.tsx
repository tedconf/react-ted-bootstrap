import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import Button from './index';

describe('Button', () => {
  it('should render sans props without throwing an error', () => {
    render(<Button>A Button</Button>);
  });

  it('should register onClick functions passed as props', () => {
    const click = jest.fn();
    const { getByTestId } = render(<Button onClick={click}>A Button</Button>);
    const button = getByTestId('button');

    fireEvent.click(button);
    expect(click).toHaveBeenCalled();
  });

  it('should register onBlur functions passed as props', () => {
    const blur = jest.fn();
    const { getByTestId } = render(<Button onBlur={blur}>A Button</Button>);
    const button = getByTestId('button');

    fireEvent.click(button);
    fireEvent.blur(button);
    expect(blur).toHaveBeenCalled();
  });

  it('should register onFocus functions passed as props', () => {
    const focus = jest.fn();
    const { getByTestId } = render(<Button onFocus={focus}>A Button</Button>);
    const button = getByTestId('button');

    fireEvent.focus(button);
    expect(focus).toHaveBeenCalled();
  });
});
