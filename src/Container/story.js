import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Container from './index';

storiesOf('Container', module)
  .add(
    'Default',
    withInfo(`
      With media query support.
    `)(() => (
      <Container>
        Default
      </Container>
    )),
  );
