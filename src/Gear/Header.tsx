import { css } from 'emotion';
import React from 'react';

export interface Props {
  children: React.ReactChild;
}

const styles = css`
  color: #777;
  display: block;
  font-size: 14px;
  line-height: 1.42;
  padding: 3px 20px;
  white-space: nowrap;
`;

const Header = ({ children }: Props) => <li className={styles}>{children}</li>;

export default Header;
