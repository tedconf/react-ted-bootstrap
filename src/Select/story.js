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
  );
