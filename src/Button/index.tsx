import { css } from 'emotion';
import React from 'react';

interface Props {
  /** text to display in the button */
  children: React.ReactChild;
  /** button type */
  type?: 'primary' | 'warning' | 'success' | 'info' | 'danger';
  /** onChange handler */
  onClick?: () => void;
  /** onFocus handler */
  onFocus?: () => void;
  /** onBlur handler */
  onBlur?: () => void;
}

const button = css`
  background-color: #ededed;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.075));
  border-color: transparent;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05ex;
  line-height: 1.42857;
  margin-bottom: 0;
  padding: 9px 12px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus,
  &:active {
    border-color: #66afe9;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
    outline: 0;
  }
`;

const theme = {
  primary: css`
    background-color: #4e4e4e;
  `,
  success: css`
    background-color: #61b563;
  `,
  info: css`
    background-color: #71c1d9;
  `,
  warning: css`
    background-color: #eaa04a;
  `,
  danger: css`
    background-color: #e12e28;
  `,
  base: css`
    border-color: #d7d7d7;
    color: #444;
    font-weight: 700;
    text-shadow: 0 1px 0 white;
  `,
};

export default ({ type, onClick, onFocus, onBlur, children }: Props) => {
  const typeClass = type || 'base';

  return (
    <button
      className={`${button} ${theme[typeClass]}`}
      type="button"
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      data-testid="button"
    >
      {children}
    </button>
  );
};
