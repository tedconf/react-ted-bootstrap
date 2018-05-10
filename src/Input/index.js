import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

function inputType(props, handlers) {
  switch (props.type) {
    case 'password':
      return <StyledInput type="password" {...handlers} />;
    case 'textarea':
      return <StyledTextarea {...handlers}>{props.children}</StyledTextarea>;
    default:
      return <StyledInput type="text" {...handlers} />;
  }
}

const Input = (props) => {
  const {
    onInput,
    onBlur,
    onFocus,
  } = props;

  const handlers = [onInput, onBlur, onFocus];

  return inputType(props, handlers);
};

const styles = {
  backgroundColor: '#fff',
  backgroundImage: 'none',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
  height: '40px',
  padding: '9px 12px',
  transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
  width: '100%',
  ':focus,:active': {
    borderColor: '#66afe9',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6)',
    outline: 0,
  },
};
const StyledInput = glamorous.input(styles);
const StyledTextarea = glamorous.textarea(styles);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node,
};

export default Input;
