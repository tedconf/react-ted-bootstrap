import { css } from 'emotion';
import React from 'react';
import Check from '../utils/Check';
import { Consumer } from './context';

export interface Props {
  children?: React.ReactChild;
  value: string;
  checked?: boolean;
}

const styles = css`
  clear: both;
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.42;
  padding: 3px 20px;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    transform: scale(1.25);
  }

  &:hover {
    background-color: #f5f5f5;
    color: #262626;
  }

  & > a {
    color: #333;
    display: block;
    text-decoration: none;
  }
`;

export default ({ children, value, checked }: Props) => (
  <Consumer>
    {({ onChange }) => (
      <li
        className={styles}
        onClick={() => onChange(value)}
        onKeyPress={() => onChange(value)}
        role="presentation"
        data-testid={`item-${value}`}
      >
        {children}
        {checked ? <Check /> : false}
      </li>
    )}
  </Consumer>
);
