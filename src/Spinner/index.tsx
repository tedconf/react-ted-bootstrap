import { css } from 'emotion';
import React from 'react';

interface Props {
  /** spinner color */
  color?: string;
}

const container = css`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: visible;

  .Spinner {
    animation: Spinner 1.1s infinite linear;
    border-bottom: 4px solid rgba(255, 255, 255, 0.2);
    border-left: 4px solid white;
    border-right: 4px solid rgba(255, 255, 255, 0.2);
    border-top: 4px solid rgba(255, 255, 255, 0.2);
    font-size: 10px;
    transform: translateZ(0);
  }

  .Spinner--dark {
    border-bottom-color: rgba(0, 0, 0, 0.2);
    border-left-color: black;
    border-right-color: rgba(0, 0, 0, 0.2);
    border-top-color: rgba(0, 0, 0, 0.2);
  }

  .Spinner--red {
    border-bottom-color: #d0dede;
    border-left-color: #ff5041;
    border-right-color: #d0dede;
    border-top-color: #d0dede;
  }

  .Spinner,
  .Spinner::after {
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }

  @-webkit-keyframes Spinner {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes Spinner {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ({ color = 'red' }: Props) => {
  const colorClass = color === 'dark' ? 'Spinner--dark' : 'Spinner--red';
  return (
    <div className={container} data-testid="spinner">
      <div className={`Spinner ${colorClass}`} />
    </div>
  );
};
