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
        <div>
          <strong>Success!</strong> You successfully read this important
          message.
        </div>
      </Alert>
    )),
  )
  .add(
    'Info',
    withInfo(`
      Info alert. This is the default if you do not provide a type.
  `)(() => (
      <Alert type="info">
        <div>
          <strong>Info.</strong> This alert needs your attention, but it's not
          super important.
        </div>
      </Alert>
    )),
  )
  .add(
    'Warning',
    withInfo(`
      Warning alert.
  `)(() => (
      <Alert type="warning">
        <div>
          <strong>Warning!</strong> Better check yourself, you're not looking
          too good.
        </div>
      </Alert>
    )),
  )
  .add(
    'Danger',
    withInfo(`
      Danger alert.
  `)(() => (
      <Alert type="danger">
        <div>
          <strong>Danger!</strong> Change a few things up and try submitting
          again.
        </div>
      </Alert>
    )),
  );
