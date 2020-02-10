import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Spinner from './index';

storiesOf('Spinner', module)
  .add(
    'Default',
    withInfo()(() => <Spinner />),
  )
  .add(
    'Dark',
    withInfo()(() => <Spinner color="dark" />),
  )
  .add(
    'Sized',
    withInfo()(() => <Spinner size="2" />),
  );
