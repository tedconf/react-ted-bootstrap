import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import React from 'react';
import TwistDown from './index';


configure({ adapter: new Adapter() });

describe('TwistDown', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<TwistDown label="test" content="testing" />).exists('div[data-bootstrap-type="twistDown"]')).toBe(true);
  });
});
