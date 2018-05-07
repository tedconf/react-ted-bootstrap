import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    type,
    onClick,
    onFocus,
    onBlur,
  } = props;

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {props.children}
    </StyledButton>
  );
};

const StyledButton = glamorous.button({
  backgroundColor: '#ededed',
  backgroundImage: 'linear-gradient(transparent, rgba(0,0,0,0.075))',
  borderColor: 'transparent',
  borderRadius: '4px',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: 'white',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '0.05ex',
  lineHeight: 1.42857,
  marginBottom: 0,
  padding: '9px 12px',
  textAlign: 'center',
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
}, (props) => {
  switch (props.type) {
    case 'primary':
      return {
        backgroundColor: '#4e4e4e',
      };
    case 'success':
      return {
        backgroundColor: '#61b563',
      };
    case 'info':
      return {
        backgroundColor: '#71c1d9',
      };
    case 'warning':
      return {
        backgroundColor: '#eaa04a',
      };
    case 'danger':
      return {
        backgroundColor: '#e12e28',
      };
    default:
      return {
        borderColor: '#d7d7d7',
        color: '#444',
        fontWeight: 700,
        textShadow: '0 1px 0 white',
      };
  }
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Button;
