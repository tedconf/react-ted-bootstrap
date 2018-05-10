import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import DataTable from './index';

const headings = [
  'First name',
  'Last name',
  'Twitter',
];

const rows = [
  {
    data: [
      'Jon',
      'Bellah',
      '@jonbellah',
    ],
  },
  {
    data: [
      'Rômulo',
      'Machado',
      '@romulomachado_',
    ],
    className: 'success',
  },
  {
    data: [
      'Vince',
      'Speelman',
      '@vinspee',
    ],
  },
];

const sortable = [true, false, true];


storiesOf('DataTable', module)
  .add(
    'Default',
    withInfo(`
      Supported classes: active, success, info, warning, danger.
    `)(() => (
      <DataTable
        headings={headings}
        rows={rows}
        onSort={action('sort')}
        sortable={sortable}
      >
        Default
      </DataTable>
    )),
  );
