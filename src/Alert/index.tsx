/** @jsx jsx */
import { css, jsx } from '@emotion/core';
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

  &[data-type='success'] {
    background-color: #e0efd5;
  }

  &[data-type='info'] {
    background-color: #deeef5;
  }

  &[data-type='warning'] {
    background-color: #fcf7e7;
  }

  &[data-type='danger'] {
    background-color: #f2d2cf;
  }
`;

const Alert = ({ type = 'info', onClose, children }: Props) => (
  <div css={alertBox} data-type={type} data-testid="alert">
    {children}
    {onClose ? (
      <button data-testid="alertClose" type="button" onClick={onClose}>
        &times;
      </button>
    ) : null}
  </div>
);

export default Alert;
