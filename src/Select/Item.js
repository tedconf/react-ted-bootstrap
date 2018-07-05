import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { Consumer } from './context';
import Check from '../utils/Check';

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

const Item = (props) => {
  const returnValue = props.value || props.children;

  return (
    <Consumer>
      {({ onChange }) => (
        <li
          className={styles}
          onClick={() => onChange(returnValue)}
          onKeyPress={() => onChange(returnValue)}
          role="presentation"
        >
          {props.children}
          {props.checked ? <Check /> : false}
        </li>
      )}
    </Consumer>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

export default Item;
