import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Alert from './index';

storiesOf('Alert', module)
  .add(
    'Success',
    withInfo(`
      Success alert.
  `)(() => (
    <Alert type="success">
      <strong>Success!</strong> You successfully read this important message.
    </Alert>
    )),
  )
  .add(
    'Info',
    withInfo(`
      Info alert. This is the default if you do not provide a type.
  `)(() => (
    <Alert type="info">
      <strong>Info.</strong> This alert needs your attention, but it's not super important.
    </Alert>
    )),
  )
  .add(
    'Warning',
    withInfo(`
      Warning alert.
  `)(() => (
    <Alert type="warning">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </Alert>
    )),
  )
  .add(
    'Danger',
    withInfo(`
      Danger alert.
  `)(() => (
    <Alert type="danger">
      <strong>Danger!</strong> Change a few things up and try submitting again.
    </Alert>
    )),
  );
