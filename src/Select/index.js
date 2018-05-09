import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

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
      <div style={{ position: 'relative' }}>
        <StyledSelect
          id={label}
          name={label}
          onChange={onChange}
        >
          {renderOptions}
        </StyledSelect>
        <StyledCaret>
          <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 8a.828.828 0 0 1-.594-.252l-5.16-5.28a.874.874 0 0 1 0-1.216.827.827 0 0 1 1.189 0L7 5.924l4.565-4.672a.827.827 0 0 1 1.189 0 .874.874 0 0 1 0 1.216l-5.16 5.28A.828.828 0 0 1 7 8z" fill="#787878" fillRule="nonzero" stroke="#787878"/>
          </svg>
        </StyledCaret>
      </div>
    </div>
  );
};

const StyledSelect = glamorous.select({
  appearance: 'none',
  background: 'linear-gradient(#fff, #f2f2f2)',
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

const StyledCaret = glamorous.span({
  position: 'absolute',
  right: 0,
  top: 0,
  marginTop: '6px',
  width: '50px',
  textAlign: 'center',
  zIndex: 10,
  borderLeft: '1px solid #ccc',
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
