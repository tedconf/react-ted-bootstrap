import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Navbar from './index';

describe('Navbar', () => {
  it('should render the correct title', () => {
    const { getByTestId } = render(<Navbar title="Bootstrap" />);
    const title = getByTestId('title');

    expect(title).toHaveTextContent('Bootstrap');
  });

  it('should register onClick functions passed as props', () => {
    const click = jest.fn();
    const { getByTestId } = render(
      <Navbar title="Bootstrap" onClick={click} />,
    );
    const button = getByTestId('button');

    fireEvent.click(button);
    expect(click).toHaveBeenCalled();
  });
});
