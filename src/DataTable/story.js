import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import DataTable from './index';

const headings = [
  'Test1',
  'Test2',
  'Test3',
];

const rows = [
  {
    data: [
      'Cell1',
      'Cell2',
      'Cell3',
    ],
  },
  {
    data: [
      'Cell1',
      'Cell2',
      'Cell3',
    ],
    className: 'success',
  },
  {
    data: [
      'Cell1',
      'Cell2',
      'Cell3',
    ],
  },
  {
    data: [
      'Cell1',
      'Cell2',
      'Cell3',
    ],
    className: 'info',
  },
];

storiesOf('DataTable', module)
  .add(
    'Default',
    withInfo()(() => (
    <DataTable
      headings={headings}
      rows={rows}
    >
      Default
    </DataTable>
    )),
  );
