import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import React from 'react';
import DataTable from './index';
import { headings, rows } from './sampleData';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<DataTable headings={headings} rows={rows} />)
      .exists('table')).toBe(true);
  });

  it('should register onSort functions passed as props', () => {
    const sort = jest.fn();
    const wrapper = mount(<DataTable headings={headings} rows={rows} onSort={sort} />);

    wrapper.find('th').first().simulate('click');
    expect(sort).toHaveBeenCalled();
  });
});
