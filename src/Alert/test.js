import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import React from 'react';
import Alert from './index';

configure({ adapter: new Adapter() });

describe('Alert', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<Alert type="success">Test!</Alert>).exists(
        'div[data-testid="alert"]',
      ),
    ).toBe(true);
  });
});
