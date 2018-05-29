import React from 'react';
import glamorous from 'glamorous';
import { NavLink } from 'react-router-dom';

const StyledNavItemLink = glamorous(NavLink)({
  color: '#000',
  padding: '3px',
  display: 'block',
  textDecoration: 'none',
  
}, ({ type }) => {
  if (type === 'primary') {
    return {
      borderBottom: '3px solid transparent',
      padding: '7px 0 4px',
      marginRight: '30px',

      ['.active']: {
        borderBottomColor: '#e62b1e'
      }
    }
  } else {
    return {
      minWidth: '90px',
      borderRadius: '3px',
      textAlign: 'center',

      ['.active']: {
        fontWeight: 700,
        backgroundColor: '#eee'
      }
    }
  }
});

const Link = ({ to, label, type, exact = true }) => (
  <StyledNavItemLink exact={exact} to={to} type={type}>
    {label}
  </StyledNavItemLink>
);

export default Link;
