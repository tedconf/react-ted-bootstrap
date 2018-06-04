import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const Header = (props) => (
  <StyledHeader>{props.children}</StyledHeader>
);

const StyledHeader = glamorous.li({
  display: 'block',
  padding: '3px 20px',
  fontSize: '14px',
  lineHeight: '1.42',
  color: '#777',
  whiteSpace: 'nowrap'
})



Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;