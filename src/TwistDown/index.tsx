/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Component } from 'react';
import Caret from '../utils/Caret';

interface Props {
  /** label to display */
  label: string;
  children: React.ReactChild;
  /** current open state */
  open?: boolean;
}

const container = css`
  display: block;
  font-size: 14px;
  width: 100%;
`;

const button = css`
  align-items: center;
  appearance: none;
  border-radius: 0;
  border: 0;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;
  outline: none;
  padding: 0;
  text-decoration: none;
`;

const label = css`
  margin-left: 4px;
`;

export default class TwistDown extends Component<Props> {
  state = {
    open: this.props.open || false,
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const rotate = this.state.open ? 'none' : 'rotate(-90deg)';

    return (
      <div css={container}>
        <button
          css={button}
          data-testid="button"
          onClick={this.toggleOpen}
          type="button"
        >
          <Caret rotate={rotate} />
          <span css={label} data-testid="label">
            {this.props.label}
          </span>
        </button>

        <div data-testid="content">
          {this.state.open ? this.props.children : null}
        </div>
      </div>
    );
  }
}
