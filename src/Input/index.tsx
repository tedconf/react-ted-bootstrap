import { css, cx } from 'emotion';
import React from 'react';

interface Props {
  /** type of input */
  type?: 'password' | 'textarea' | 'text' | 'email';
  /** placeholder text */
  placeholder?: string;
  /** field value */
  value?: string;
  /** event to fire onChange */
  onChange?: () => void;
  /** event to fire onFocus */
  onFocus?: () => void;
  /** event to fire onBlur */
  onBlur?: () => void;
  children?: React.ReactChild;
}

const styles = css`
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-sizing: border-box;
  font-family: inherit;
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

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  children,
}: Props) => {
  switch (type) {
    case 'password':
      return (
        <input
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cx(styles, styledInput)}
          data-testid="password"
        />
      );
    case 'email':
      return (
        <input
          type="email"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cx(styles, styledInput)}
          data-testid="email"
        />
      );
    case 'textarea':
      return (
        <textarea
          className={styles}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          data-testid="textarea"
        >
          {children}
        </textarea>
      );
    default:
      return (
        <input
          type="text"
          className={cx(styles, styledInput)}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          data-testid="text"
        />
      );
  }
};

export default Input;
