import { css, cx } from 'emotion';
import React from 'react';

interface Props {
  /** message to display in the alert box */
  children: React.ReactChild;
  /** the type of alert to show */
  type: 'success' | 'info' | 'warning' | 'danger';
  /** action to fire on close */
  onClose?: () => void;
}

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

export default ({ type, onClose, children }: Props) => {
  const typeClass = type || 'info';

  return (
    <div data-testid="alert" className={cx(alertBox, theme[typeClass])}>
      {children}
      {onClose ? (
        <button data-testid="alertClose" type="button" onClick={onClose}>
          &times;
        </button>
      ) : null}
    </div>
  );
};
