import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Select from './index';

storiesOf('Select', module)
  .add(
    'Default',
    withInfo()(() => (
      <Select label="Test" onChange={action('onChange')}>
        <Select.Item>Testing</Select.Item>
      </Select>
    )),
  )
  .add(
    'Multi-select',
    withInfo()(() => (
      <Select multi label="Test" onChange={action('onChange')}>
        <Select.Item value="testing" checked>Testing</Select.Item>
        <Select.Item value="testing2">Testing 2</Select.Item>
        <Select.Item value="testing3">Testing 3</Select.Item>
      </Select>
    )),
  )
  .add(
    'Headers and dividers',
    withInfo()(() => (
      <Select label="Select with headers">
        <Select.Header>Header</Select.Header>
        <Select.Item>TED.com</Select.Item>
        <Select.Divider />
        <Select.Header>Different Header</Select.Header>
        <Select.Item>TED.com</Select.Item>
      </Select>
    )),
  );
