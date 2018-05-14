import React from 'react';
import glamorous from 'glamorous';
import { NavLink } from 'react-router-dom';

const NavItemLink = glamorous(NavLink)({
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

const SubNavItem = ({ to, label, type, exact = true }) => (
  <NavItemLink exact={exact} to={to} type={type}>
    {label}
  </NavItemLink>
);

export default SubNavItem;
