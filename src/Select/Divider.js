import React from 'react';
import { css } from 'emotion';

const styles = css`
  background-color: #e5e5e5;
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
`;

const Divider = () => (
  <li className={styles} />
);

export default Divider;
