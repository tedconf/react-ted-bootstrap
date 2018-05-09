import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import DataTable from './index';

const headings = [
  'Test1',
  'Test2',
  'Test3',
];

storiesOf('DataTable', module)
  .add(
    'Default',
    withInfo(`
      Standard title
  `)(() => (
    <DataTable
      headings={headings}
    >
      Default
    </DataTable>
    )),
  );
