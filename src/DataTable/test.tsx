import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import DataTable from './index';

let headings = [
  {
    label: 'First name',
    sortable: true,
  },
  {
    label: 'Last name',
  },
  {
    label: 'Twitter',
    sortable: true,
  },
];

let rows = [
  {
    data: [
      'Jon',
      'Bellah',
      <a href="https://twitter.com/jonbellah">@jonbellah</a>,
    ],
    onClick: () => {},
  },
  {
    data: ['Rômulo', 'Machado', '@romulomachado_'],
    className: 'success',
  },
  {
    data: ['Vince', 'Speelman', '@vinspee'],
  },
];

describe('Button', () => {
  it('should render sans props without throwing an error', () => {
    render(<DataTable />);
  });

  it('should register onSort functions passed as props', () => {
    const sort = jest.fn();

    // set our sort mock as the onclick method
    rows[0].onClick = sort;

    const { getByText } = render(
      <DataTable headings={headings} rows={rows} onSort={sort} />,
    );
    const heading = getByText('First name');

    fireEvent.click(heading);
    expect(sort).toHaveBeenCalled();
  });

  it('should render the correct number of rows', () => {
    const { getAllByTestId } = render(
      <DataTable headings={headings} rows={rows} />,
    );
    const rendered = getAllByTestId('tableRow');

    expect(rendered).toHaveLength(3);
  });

  it('should render the correct number of headings', () => {
    const { getAllByTestId } = render(
      <DataTable headings={headings} rows={rows} />,
    );
    const rendered = getAllByTestId('tableHeading');

    expect(rendered).toHaveLength(3);
  });
});
