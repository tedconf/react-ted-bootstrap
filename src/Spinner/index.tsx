/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface Props {
  /** spinner color */
  color?: 'red' | 'dark';
  /** spinner size */
  size?: number | string;
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

  .Spinner[data-color='dark'] {
    border-bottom-color: rgba(0, 0, 0, 0.2);
    border-left-color: black;
    border-right-color: rgba(0, 0, 0, 0.2);
    border-top-color: rgba(0, 0, 0, 0.2);
  }

  .Spinner[data-color='red'] {
    border-bottom-color: #d0dede;
    border-left-color: #ff5041;
    border-right-color: #d0dede;
    border-top-color: #d0dede;
  }

  .Spinner,
  .Spinner::after {
    border-radius: 50%;
  }

  .Spinner[data-size='1'],
  .Spinner[data-size='1']:after {
    height: 15px;
    width: 15px;
  }

  .Spinner[data-size='2'],
  .Spinner[data-size='2']:after {
    height: 25px;
    width: 25px;
  }

  .Spinner[data-size='3'],
  .Spinner[data-size='3']:after {
    height: 40px;
    width: 40px;
  }

  .Spinner[data-size='4'],
  .Spinner[data-size='4']:after {
    height: 60px;
    width: 60px;
  }

  .Spinner[data-size='5'],
  .Spinner[data-size='5']:after {
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

const Spinner = ({ color = 'red', size = '5' }: Props) => {
  return (
    <div css={container} data-testid="spinner">
      <div className="Spinner" data-color={color} data-size={size} />
    </div>
  );
};

export default Spinner;
