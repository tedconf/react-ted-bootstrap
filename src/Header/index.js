import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Logo from './Logo';

const Header = (props) => {
  const {
    title,
  } = props;

  return (
    <StyledHeader>
      <Container>
        <Brand>
          <Logo />
          {title}
        </Brand>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = glamorous.header({
  background: '#111',
  border: '1px solid transparent',
  color: 'white',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  marginBottom: '20px',
  minHeight: '58px',
  position: 'relative',
});

const Container = glamorous.div({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
