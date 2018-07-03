import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const styles = css`
  clear: both;
  cursor: pointer;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  <li className={styles}>
    {props.children}
  </li>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Item;
