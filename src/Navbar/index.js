import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Logo from './Logo';
import Container from '../Container';

const styledNavbar = css`
  background: #111;
  border: 1px solid transparent;
  color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 20px;
  min-height: 58px;
  position: relative;
`;

const brand = css`
  align-items: center;
  appearance: none;
  background: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 25px;
  font-weight: 500;
  height: 58px;
  line-height: 20px;
  outline: none;
  padding: 2px 15px 2px 0;
`;

const inner = css`
  align-items; center;
  display: flex;
  justify-content: space-between;
`;

const navRight = css`
  display: flex;
  align-items: center;
`;

const Navbar = (props) => {
  const {
    title,
    onClick,
    rightMenu,
  } = props;

  return (
    <header className={styledNavbar}>
      <Container>
        <div className={inner}>
          <button type="button" className={brand} onClick={onClick}>
            <Logo />
            {title}
          </button>
          <div className={navRight}>
            {rightMenu}
          </div>
        </div>
      </Container>
    </header>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  rightMenu: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

export default Navbar;
