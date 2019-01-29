import { action } from '@storybook/addon-actions';
import React from 'react';

export const headings = [
  {
    label: 'First name',
    sortable: true,
  },
  {
    label: 'Last name',
  },
  {
    label: 'Twitter',
    sortable: true,
  },
];

export const rows = [
  {
    data: [
      'Jon',
      'Bellah',
      <a href="https://twitter.com/jonbellah">@jonbellah</a>,
    ],
    onClick: action('onClick'),
  },
  {
    data: ['Rômulo', 'Machado', '@romulomachado_'],
    className: 'success',
  },
  {
    data: ['Vince', 'Speelman', '@vinspee'],
  },
];
