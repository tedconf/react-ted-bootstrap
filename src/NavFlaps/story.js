import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import NavFlaps from './index';
import Tab from './Tab';

const ContentOne = () => <div>testing</div>;

const ContentTwo = () => <div>testing 2</div>;

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
  )
  .add(
    'Click handler',
    withInfo(`
        With click handler
    `)(() => (
      <NavFlaps onClick={action('onClick')}>
        <Tab label="Tab 1" content={<ContentOne />} />
        <Tab label="Tab 2" content={<ContentTwo />} />
      </NavFlaps>
    )),
  )
  .add(
    'SubnavFlap',
    withInfo(`
        SubnavFlap
    `)(() => (
      <NavFlaps onClick={action('onClick')} type="subnav">
        <Tab label="Tab 1" content={<ContentOne />} />
        <Tab label="Tab 2" content={<ContentTwo />} />
      </NavFlaps>
    )),
  );
