import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import caret from './caret.png';

const Select = (props) => {
  const {
    label,
    showLabel,
    options,
    onChange,
  } = props;

  const renderOptions = options.map(o => (
    <option key={o.value} value={o.value} name={o.label}>
      {o.label}
    </option>
  ));

  const renderLabel = showLabel ? <StyledLabel htmlFor={label}>{label}</StyledLabel> : false;

  return (
    <div>
      {renderLabel}
      <StyledSelect
        id={label}
        name={label}
        onChange={onChange}
      >
        {renderOptions}
      </StyledSelect>
    </div>
  );
};

const StyledSelect = glamorous.select({
  appearance: 'none',
  background: `url(${caret}) right 15px center no-repeat,linear-gradient(#fff, #f2f2f2)`,
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: 'none',
  color: '#555',
  display: 'block',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '14px',
  height: '40px',
  lineHeight: 1.42857,
  padding: '9px 12px',
  paddingRight: '50px',
  textIndent: '1px',
  transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
  width: '100%',
  ':active,:focus': {
    borderColor: '#66afe9',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6)',
    outline: 0,
  },
});

const StyledLabel = glamorous.label({
  display: 'inline-block',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '5px',
  maxWidth: '100%',
});

Select.propTypes = {
  label: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
};

export default Select;
