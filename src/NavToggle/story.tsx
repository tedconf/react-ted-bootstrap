import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Navbar from '../Navbar';
import NavToggle from './index';

storiesOf('NavToggle', module).add(
  'Default',
  withInfo(`
      Standard nav toggle
  `)(() => (
    <Navbar
      title="Bootstrap"
      rightMenu={
        <NavToggle label="TED2019">
          <a href="test">test</a>
          <a href="test2">test2</a>
        </NavToggle>
      }
    />
  )),
);
