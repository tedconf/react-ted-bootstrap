import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Caret from '../utils/Caret';

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

export default class TwistDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  renderContents() {
    if (this.state.open) {
      return <div>{this.props.content}</div>;
    }

    return <div />;
  }

  render() {
    const rotate = this.state.open ? 'none' : 'rotate(-90deg)';

    return (
      <div className={container} data-bootstrap-type="twistDown">
        <button className={button} type="button" onClick={this.toggleOpen}>
          <Caret rotate={rotate} />
          <span className={label}>{this.props.label}</span>
        </button>
        {this.renderContents()}
      </div>
    );
  }
}

TwistDown.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  open: PropTypes.bool,
};
