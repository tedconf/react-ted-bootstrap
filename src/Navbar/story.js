import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Navbar from './index';

storiesOf('Navbar', module)
  .add(
    'Default',
    withInfo(`
      Standard title
  `)(() => (
    <Navbar
      title="Bootstrap"
    >
      Default
    </Navbar>
    )),
  );
