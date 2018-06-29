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
  display: flex;
  font-size: 25px;
  font-weight: 500;
  height: 58px;
  line-height: 20px;
  padding: 2px 15px 2px 0;
`;

const Navbar = (props) => {
  const {
    title,
  } = props;

  return (
    <header className={styledNavbar}>
      <Container>
        <div className={brand}>
          <Logo />
          {title}
        </div>
      </Container>
    </header>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
