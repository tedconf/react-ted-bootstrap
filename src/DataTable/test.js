import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DataTable from './index';

import { headings, rows, sortable } from './sampleData';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<DataTable headings={headings} rows={rows} sortable={sortable} />)
      .exists(<table />)).toBe(true);
  });

  it('should register onSort functions passed as props', () => {
    const sort = jest.fn();
    const wrapper = mount(<DataTable headings={headings} rows={rows} sortable={sortable} onSort={sort} />);

    wrapper.find('th').first().simulate('click');
    expect(sort).toHaveBeenCalled();
  });
});
