import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Header from './index';

storiesOf('Header', module)
  .add(
    'Default',
    withInfo(`
      Standard title
  `)(() => (
    <Header
      title="Bootstrap"
    >
      Default
    </Header>
    )),
  );
