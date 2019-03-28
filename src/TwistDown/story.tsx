import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import TwistDown from './index';

storiesOf('TwistDown', module).add(
  'Default',
  withInfo()(() => <TwistDown label="Candidacy details">Test</TwistDown>),
);
