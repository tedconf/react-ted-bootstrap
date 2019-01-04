import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import NavToggle from './index';

storiesOf('NavToggle', module)
  .add(
    'Default',
    withInfo(`
      Standard nav toggle
  `)(() => (
    <NavToggle />
    )),
  );
