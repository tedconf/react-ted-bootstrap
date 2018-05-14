import React from 'react';
import glamorous from 'glamorous';

const StyledSubNavItem = glamorous.li({
  display: 'inline-block',
  marginRight: '.5em'
});

const SubNavItem = props => (
  <StyledSubNavItem>{props.children}</StyledSubNavItem>
);

export default SubNavItem;