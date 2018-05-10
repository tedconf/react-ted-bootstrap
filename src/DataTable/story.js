import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import DataTable from './index';

import { headings, rows } from './sampleData';

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
      >
        Default
      </DataTable>
    )),
  );
