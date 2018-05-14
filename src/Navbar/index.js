import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Logo from './Logo';
import Container from '../Container';

const Navbar = (props) => {
  const {
    title,
  } = props;

  return (
    <StyledNavbar>
      <Container>
        <Brand>
          <Logo />
          {title}
        </Brand>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = glamorous.header({
  background: '#111',
  border: '1px solid transparent',
  color: 'white',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  marginBottom: '20px',
  minHeight: '58px',
  position: 'relative',
});

const Brand = glamorous.div({
  alignItems: 'center',
  display: 'flex',
  fontSize: '27px',
  fontWeight: 'bold',
  height: '58px',
  lineHeight: '20px',
  padding: '2px 15px',
});

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
