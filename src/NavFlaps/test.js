import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import React from 'react';
import NavFlaps from './index';
import Tab from './Tab';

configure({ adapter: new Adapter() });

const TestComponent = () => <div id="testComponent">testing</div>;

describe('Select', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <NavFlaps>
          <Tab label="Test 1" content={<TestComponent />} />
          <Tab label="Test 2" content={<TestComponent />} />
        </NavFlaps>,
      ).exists('div#testComponent'),
    ).toBe(true);
  });
});
