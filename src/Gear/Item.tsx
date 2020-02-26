/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

export interface Props {
  children: React.ReactChild;
}

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

const Item = ({ children }: Props) => <li css={styles}>{children}</li>;

export default Item;
