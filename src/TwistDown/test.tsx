import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import TwistDown from './index';

describe('TwistDown', () => {
  it('should render the correct label', () => {
    const { getByTestId } = render(
      <TwistDown label="test">Test content</TwistDown>,
    );
    const label = getByTestId('label');

    expect(label).toHaveTextContent('test');
  });

  it('should expand content when clicked', () => {
    const { getByTestId } = render(<TwistDown label="test">Testing</TwistDown>);
    const button = getByTestId('button');
    const content = getByTestId('content');

    expect(content).toBeEmpty();
    fireEvent.click(button);
    expect(content).toHaveTextContent('Testing');
  });

  it('should respect open props', () => {
    const { getByTestId } = render(
      <TwistDown label="test" open>
        Testing
      </TwistDown>,
    );
    const button = getByTestId('button');
    const content = getByTestId('content');

    expect(content).toHaveTextContent('Testing');
    fireEvent.click(button);
    expect(content).toBeEmpty();
  });
});
