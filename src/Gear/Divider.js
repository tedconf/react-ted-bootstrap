import React, { Component } from 'react';
import glamorous from 'glamorous';

const Divider = (props) => (
  <StyledDivider />
);

const StyledDivider = glamorous.li({
  height: '1px',
  margin: '9px 0',
  overflow: 'hidden',
  backgroundColor: '#e5e5e5'
})

export default Divider;