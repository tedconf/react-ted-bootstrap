import React, { Component } from 'react';
import glamorous from 'glamorous';

import Item from './Item';
import Link from './Link';

const StyledNav = glamorous.ul({
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: '0 0 1em',
  margin: '0 0 1em',
  listStyleType: 'none',
  borderBottom: '1px solid #ddd',
  fontSize: '14px',
}, ({ type }) => {
  if (type === 'primary') {
    return {
      padding: 0,
      fontSize: '18px',
      fontWeight: 700,
    }
  }
});

class Nav extends Component {
  static Item = Item;
  static Link = Link;

  render() {
    const { type, children } = this.props;
  
    return (
      <StyledNav type={type}>
        {children}
      </StyledNav>
    );
  }
};

export default Nav;