import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from './index';

storiesOf('Input', module)
  .add(
    'Text',
    withInfo()(() => (
      <Input
        type="text"
        placeholder="Text input"
        onChange={action('onChange')}
        onFocus={action('onFocus')}
        onBlur={action('onBlur')}
      />
    )),
  )
  .add('Password', withInfo()(() => <Input type="password" />))
  .add('Textarea', withInfo()(() => <Input type="textarea" />));
