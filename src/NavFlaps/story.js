import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavFlaps from './index';
import Tab from './Tab';

const ContentOne = () => (
  <div>
    testing
  </div>
);

const ContentTwo = () => (
  <div>
    testing 2
  </div>
);

storiesOf('NavFlaps', module)
  .add(
    'Default',
    withInfo(`
      Standard title
  `)(() => (
    <NavFlaps>
      <Tab label="Tab 1" content={<ContentOne />} />
      <Tab label="Tab 2" content={<ContentTwo />} />
    </NavFlaps>
    )),
  );
