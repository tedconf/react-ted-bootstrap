import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Caret from '../utils/Caret';

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
      <TwistContainer>
        <TwistButton onClick={this.toggleOpen}>
          <Caret rotate={rotate} />
          <Label>{this.props.label}</Label>
        </TwistButton>
        {this.renderContents()}
      </TwistContainer>
    );
  }
}

const TwistContainer = glamorous.div({
  display: 'block',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '14px',
  width: '100%',
});

const TwistButton = glamorous.button({
  alignItems: 'center',
  appearance: 'none',
  border: 0,
  borderRadius: 0,
  color: '#111',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: '12px',
  outline: 'none',
  padding: 0,
  textDecoration: 'none',
});

const Label = glamorous.span({
  marginLeft: '4px',
});

TwistDown.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  open: PropTypes.bool,
};
