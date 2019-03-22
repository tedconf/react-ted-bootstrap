import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import Input from './index';

describe('Input', () => {
  it('should render sans props without throwing an error', () => {
    expect(render(<Input />));
  });

  it('should correctly render the text type', () => {
    const { getByTestId, queryByTestId } = render(<Input type="text" />);

    expect(getByTestId('text')).toBeInTheDocument();
    expect(queryByTestId('password')).not.toBeInTheDocument();
  });

  it('should correctly render the email type', () => {
    const { getByTestId, queryByTestId } = render(<Input type="email" />);

    expect(getByTestId('email')).toBeInTheDocument();
    expect(queryByTestId('password')).not.toBeInTheDocument();
  });

  it('should correctly render the password type', () => {
    const { getByTestId, queryByTestId } = render(<Input type="password" />);

    expect(getByTestId('password')).toBeInTheDocument();
    expect(queryByTestId('text')).not.toBeInTheDocument();
  });

  it('should correctly render the textarea type', () => {
    const { getByTestId, queryByTestId } = render(<Input type="textarea" />);

    expect(getByTestId('textarea')).toBeInTheDocument();
    expect(queryByTestId('password')).not.toBeInTheDocument();
  });

  it('should register onChange functions passed as props', () => {
    const change = jest.fn();
    const { getByTestId } = render(<Input type="text" onChange={change} />);
    const field = getByTestId('text');

    fireEvent.change(field, { target: { value: 'a' } });
    expect(change).toHaveBeenCalled();
  });

  it('should register onBlur functions passed as props', () => {
    const blur = jest.fn();
    const { getByTestId } = render(<Input type="text" onBlur={blur} />);
    const field = getByTestId('text');

    fireEvent.focus(field);
    fireEvent.blur(field);
    expect(blur).toHaveBeenCalledTimes(1);
  });

  it('should register onFocus functions passed as props', () => {
    const focus = jest.fn();
    const { getByTestId } = render(<Input type="text" onFocus={focus} />);
    const field = getByTestId('text');

    fireEvent.focus(field);
    expect(focus).toHaveBeenCalled();
  });
});
