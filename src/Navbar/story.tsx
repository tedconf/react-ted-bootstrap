import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Navbar from './index';

const RightMenu = () => <div>Right Navbar</div>;

storiesOf('Navbar', module).add(
  'Default',
  withInfo(`
      Standard title
  `)(() => (
    <Navbar
      title="Bootstrap"
      onClick={action('button-click')}
      rightMenu={<RightMenu />}
    />
  )),
);
