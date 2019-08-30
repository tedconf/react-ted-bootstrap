import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './index';

storiesOf('Button', module)
  .add(
    'Default',
    withInfo(`
      Standard button.
  `)(() => (
      <Button
        onClick={action('button-click')}
        onBlur={action('button-blur')}
        onFocus={action('button-focus')}
      >
        Default
      </Button>
    )),
  )
  .add(
    'Primary',
    withInfo(`
    Provides extra visual weight and identifies the primary action in a set of buttons.
  `)(() => <Button type="primary">Primary</Button>),
  )
  .add(
    'Primary (Outline)',
    withInfo(`
    Provides extra visual weight and identifies the primary action in a set of buttons.
  `)(() => <Button type="primaryOutline">Primary Outline</Button>),
  )
  .add(
    'Success',
    withInfo(`
    Indicates a successful or positive action.
  `)(() => <Button type="success">Success</Button>),
  )
  .add(
    'Info',
    withInfo(`
    Contextual button for informational alert messages.
  `)(() => <Button type="info">Info</Button>),
  )
  .add(
    'Warning',
    withInfo(`
    Indicates caution should be taken with this action.
  `)(() => <Button type="warning">Warning</Button>),
  )
  .add(
    'Danger',
    withInfo(`
    Indicates a dangerous or potentially negative action.
  `)(() => <Button type="danger">Danger</Button>),
  )
  .add(
    'Black',
    withInfo(`
    Basic flat button.
  `)(() => <Button type="black">Danger</Button>),
  )
  .add(
    'Disabled',
    withInfo(`
    Indicates a disabled button.
  `)(() => (
      <Button type="danger" disabled>
        Danger
      </Button>
    )),
  );
