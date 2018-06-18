import React, { Component } from 'react';
import glamorous from 'glamorous';

export default class TwistDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
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
    return (
      <TwistContainer>
        <TwistButton onClick={this.toggleOpen}>{this.props.label}</TwistButton>
        {this.renderContents()}
      </TwistContainer>
    );
  }
}

const TwistContainer = glamorous.div({
  display: 'block',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '14px',
});

const TwistButton = glamorous.button({
  appearance: 'none',
  border: 0,
  borderRadius: 0,
  color: '#111',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  outline: 'none',
  textDecoration: 'none',
});
