import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const styles = css`
  & > a {
    clear: both;
    color: #333;
    display: block;
    font-weight: 400;
    line-height: 1.42;
    padding: 3px 20px;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      background-color: #f5f5f5;
      color: #262626;
    }
  }
`;

const Item = props => (
  <li className={styles}>
    {props.children}
  </li>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Item;
