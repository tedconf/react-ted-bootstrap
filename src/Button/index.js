import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

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

const Button = props => {
  const { type, onClick, onFocus, onBlur, children } = props;
  const typeClass = type || 'base';

  return (
    <button
      className={`${button} ${theme[typeClass]}`}
      type="button"
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      data-bootstrap-type="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Button;
