import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Select from './index';

const options = [
  {label: 'Today', value: 'today'},
  {label: 'Yesterday', value: 'yesterday'},
  {label: 'Last 7 days', value: 'lastWeek'},
];

storiesOf('Select', module)
  .add(
    'Default',
    withInfo(`
      Standard title
  `)(() => (
    <Select options={options}>
      Default
    </Select>
    )),
  );
