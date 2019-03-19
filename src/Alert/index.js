import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const alertBox = css`
  border-radius: 4px;
  border: 1px solid transparent;
  color: #333;
  font-family: inherit;
  margin-bottom: 20px;
  padding: 15px;
`;

const theme = {
  success: css`
    background-color: #e0efd5;
  `,
  info: css`
    background-color: #deeef5;
  `,
  warning: css`
    background-color: #fcf7e7;
  `,
  danger: css`
    background-color: #f2d2cf;
  `,
};

const Alert = ({ type, onClose, children }) => {
  const typeClass = type || 'info';

  return (
    <div data-testid="alert" className={cx(alertBox, theme[typeClass])}>
      {children}
      {onClose ? (
        <button type="button" onClick={onClose}>
          &times;
        </button>
      ) : null}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Alert;
