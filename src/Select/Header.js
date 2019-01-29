import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const styles = css`
  color: #999;
  display: block;
  font-size: 12px;
  line-height: 1.42;
  padding: 3px 20px;
  white-space: nowrap;
`;

const Header = props => <li className={styles}>{props.children}</li>;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
