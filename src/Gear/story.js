import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Gear from './index';

storiesOf('Gear', module)
  .add(
    'Simple gear',
    withInfo()(() => (
      <Gear>
        <Gear.Item><a href='https://ted.com'>TED.com</a></Gear.Item>
      </Gear>
    )),
  )
  .add(
    'Alignment',
    withInfo()(() => (
      <Gear right>
        <Gear.Item><a href='https://ted.com'>TED.com</a></Gear.Item>
      </Gear>
    )),
  )
  .add(
    'Headers and dividers',
    withInfo()(() => (
      <Gear>
        <Gear.Header>Header</Gear.Header>
        <Gear.Item><a href='https://ted.com'>TED.com</a></Gear.Item>
        <Gear.Divider />
        <Gear.Header>Different Header</Gear.Header>
        <Gear.Item><a href='https://ted.com'>TED.com</a></Gear.Item>
      </Gear>
    ))
  )