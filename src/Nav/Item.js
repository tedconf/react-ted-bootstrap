import React, { Component } from 'react';
import glamorous from 'glamorous';

const StyledNavItem = glamorous.li({
  display: 'inline-block',
  marginRight: '.5em'
});

const Item = props => (
  <StyledNavItem>{props.children}</StyledNavItem>
);

export default Item;