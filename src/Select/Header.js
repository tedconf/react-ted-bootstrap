import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const styles = css`
  color: #999;
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 1.42;
  padding: 3px 20px;
  white-space: nowrap;
`;

const Header = props => (
  <li className={styles}>
    {props.children}
  </li>
);


Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
