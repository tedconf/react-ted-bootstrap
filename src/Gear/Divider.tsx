/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const styles = css`
  background-color: #e5e5e5;
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
`;

const Divider = () => <li css={styles} />;

export default Divider;
