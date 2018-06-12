import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Dropdown from './index';

storiesOf('Dropdown', module)
  .add(
    'Default',
    withInfo(`
      Supported classes: active, success, info, warning, danger.
    `)(() => (
      <Dropdown
        onClick={action('click')}
        options={[
          {
            label: 'yesterday',
          },
          {
            label: 'today',
          },
          {
            label: 'tomorrow',
          },
        ]}
      />
    )),
  );
