import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const styles = css`
  color: #777;
  display: block;
  font-size: 14px;
  line-height: 1.42;
  padding: 3px 20px;
  white-space: nowrap;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
