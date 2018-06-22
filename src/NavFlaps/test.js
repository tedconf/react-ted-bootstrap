import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavFlaps from './index';
import Tab from './Tab';

configure({ adapter: new Adapter() });

const TestComponent = () => <div id="test-component">testing</div>;

describe('Select', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <NavFlaps>
          <Tab label="Test 1" content={<TestComponent />} />
          <Tab label="Test 2" content={<TestComponent />} />
        </NavFlaps>,
      ).exists(<div id="test-component" />),
    ).toBe(true);
  });
});
