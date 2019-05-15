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
    font-size: 10px;
    border-top: 4px solid rgba(255, 255, 255, 0.2);
    border-right: 4px solid rgba(255, 255, 255, 0.2);
    border-bottom: 4px solid rgba(255, 255, 255, 0.2);
    border-left: 4px solid white;
    transform: translateZ(0);
    animation: Spinner 1.1s infinite linear;
  }

  .Spinner--dark {
    border-top-color: rgba(0, 0, 0, 0.2);
    border-right-color: rgba(0, 0, 0, 0.2);
    border-bottom-color: rgba(0, 0, 0, 0.2);
    border-left-color: black;
  }

  .Spinner--red {
    border-top-color: #d0dede;
    border-right-color: #d0dede;
    border-bottom-color: #d0dede;
    border-left-color: #ff5041;
  }

  .Spinner,
  .Spinner::after {
    border-radius: 50%;
    width: 80px;
    height: 80px;
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
