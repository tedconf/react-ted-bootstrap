import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Nav from './index';

storiesOf('Nav', module)
  .add(
    'Primary Nav',
    withInfo()(() => (
      <Nav type='primary'>
        <Nav.Item>
          <Nav.Link to='/talks' label='Talks' exact={false} type='primary' />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to='/playlists' label='Playlists' exact={false} type='primary' />
        </Nav.Item>
      </Nav>
    )),
  )
  .add(
    'Secondary Nav',
    withInfo()(() => (
      <Nav>
        <Nav.Item>
          <Nav.Link to='/talks' label='Library' type='secondary' />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to='/talks/add' label='Add new' type='secondary' />
        </Nav.Item>
      </Nav>
    )),
  )