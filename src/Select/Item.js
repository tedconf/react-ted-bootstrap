import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { Consumer } from './context';

const styles = css`
  clear: both;
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.42;
  padding: 3px 20px;
  white-space: nowrap;

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

const Item = props => (
  <Consumer>
    {({ onChange }) => (
      <li
        className={styles}
        onClick={() => onChange(props.children)}
        onKeyPress={() => onChange(props.children)}
        role="presentation"
      >
        {props.children}
      </li>
    )}
  </Consumer>
);

Item.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Item;
