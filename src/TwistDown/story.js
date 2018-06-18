import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import TwistDown from './index';

storiesOf('TwistDown', module)
  .add(
    'Default',
    withInfo()(() => (
      <TwistDown label="Candidacy details" content="test" />
    )),
  );
