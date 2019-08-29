import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import DataTable from './index';

export const headings = [
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

export const unsortableHeadings = [
  {
    label: 'First name',
  },
  {
    label: 'Last name',
  },
  {
    label: 'Twitter',
  },
];

export const rows = [
  {
    data: [
      'Jon',
      'Bellah',
      <a href="https://twitter.com/jonbellah">@jonbellah</a>,
    ],
    onClick: action('onClick'),
  },
  {
    data: ['Rômulo', 'Machado', '@romulomachado_'],
    className: 'success',
  },
  {
    data: ['Vince', 'Speelman', '@vinspee'],
  },
];

storiesOf('DataTable', module)
  .add(
    'Default',
    withInfo(`
      Supported classes: active, success, info, warning, danger.
    `)(() => (
      <DataTable headings={headings} rows={rows} onSort={action('sort')}>
        Default
      </DataTable>
    )),
  )
  .add(
    'Unsortable',
    withInfo(`No sortable columns`)(() => (
      <DataTable
        headings={unsortableHeadings}
        rows={rows}
        onSort={action('sort')}
      >
        Default
      </DataTable>
    )),
  );
