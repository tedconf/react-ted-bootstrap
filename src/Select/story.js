import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Select from './index';

const options = [
  {
    label: 'Today',
    value: 'today',
  },
  {
    label: 'Yesterday',
    value: 'yesterday',
  },
];

storiesOf('Select', module)
  .add(
    'Default',
    withInfo()(() => (
      <Select options={options} label="Test" showLabel onChange={action('onChange')} />
    )),
  );
