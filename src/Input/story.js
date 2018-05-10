import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Input from './index';

storiesOf('Input', module)
  .add(
    'Text',
    withInfo(`
      Standard title
  `)(() => (
    <Input
      type="text"
    />
    )),
  )
  .add(
    'Password',
    withInfo(`
      Standard title
  `)(() => (
    <Input
      type="password"
    />
    )),
  )
  .add(
    'Textarea',
    withInfo(`
      Standard title
  `)(() => (
    <Input
      type="textarea"
    />
    )),
  );
