/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

interface Props {
  /** text to display in the button */
  children: React.ReactChild;
  /** button type */
  type?:
    | 'primary'
    | 'primaryOutline'
    | 'warning'
    | 'success'
    | 'info'
    | 'danger'
    | 'black';
  /** onChange handler */
  onClick?: () => void;
  /** onFocus handler */
  onFocus?: () => void;
  /** onBlur handler */
  onBlur?: () => void;
  /** is disabled */
  disabled?: boolean;
}

const styledButton = css`
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

  &:disabled {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }

  &:focus,
  &:active {
    border-color: #66afe9;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
    outline: 0;
  }

  &[data-type='primary'] {
    background-color: #4e4e4e;
  }

  &[data-type='primaryOutline'] {
    background-color: #fff;
    background-image: none;
    border-color: #111;
    color: #111;
  }

  &[data-type='success'] {
    background-color: #61b563;
  }

  &[data-type='info'] {
    background-color: #71c1d9;
  }

  &[data-type='warning'] {
    background-color: #eaa04a;
  }

  &[data-type='danger'] {
    background-color: #e12e28;
  }

  &[data-type='black'] {
    background-image: none;
    background-color: #111;
    color: #fff;
    text-shadow: none;
  }

  &[data-type='default'] {
    border-color: #d7d7d7;
    color: #444;
    font-weight: 700;
    text-shadow: 0 1px 0 white;
  }
`;

const Button = ({
  type,
  onClick,
  onFocus,
  onBlur,
  children,
  disabled,
}: Props) => (
  <button
    css={styledButton}
    type="button"
    onClick={onClick}
    onBlur={onBlur}
    onFocus={onFocus}
    disabled={disabled}
    data-testid="button"
    data-type={type || 'default'}
  >
    {children}
  </button>
);

export default Button;
