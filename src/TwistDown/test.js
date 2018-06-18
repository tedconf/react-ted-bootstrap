import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TwistDown from './index';

configure({ adapter: new Adapter() });

describe('TwistDown', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<TwistDown label="test" content="testing" />).exists(<div />)).toBe(true);
  });
});
