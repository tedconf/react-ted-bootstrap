import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const styles = css`
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.42857;
  padding: 9px 12px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  width: 100%;

  &:focus,
  &:active {
    border-color: #66afe9;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
    outline: 0;
  }
`;

const styledInput = css`
  height: 40px;
`;

const Input = props => {
  switch (props.type) {
    case 'password':
      return (
        <input
          type="password"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          className={cx(styles, styledInput)}
        />
      );
    case 'textarea':
      return (
        <textarea
          className={styles}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        >
          {props.children}
        </textarea>
      );
    default:
      return (
        <input
          type="text"
          className={cx(styles, styledInput)}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
      );
  }
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node,
};

export default Input;
