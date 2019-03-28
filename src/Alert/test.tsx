import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import Alert from './index';

describe('Alert', () => {
  it('should render without throwing an error', () => {
    render(<Alert type="success">Test!</Alert>);
  });

  it('should call onClose method', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Alert type="warning" onClose={onClose}>
        Test!
      </Alert>,
    );
    const closeBtn = getByTestId('alertClose');

    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });
});
