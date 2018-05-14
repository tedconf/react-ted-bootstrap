import React from 'react';
import glamorous from 'glamorous';

const StyledNav = glamorous.ul({
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

const Nav = (props) => {
  const { type } = props;

  return (
    <StyledNav type={type}>
      {props.children}
    </StyledNav>
  );
};

export default Nav;