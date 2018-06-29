import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const styledSelect = css`
  appearance: none;
  background: linear-gradient(#fff, #f2f2f2);
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: none;
  color: #555;
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: 40px;
  line-height: 1.42857;
  padding: 9px 12px;
  padding-right: 50px;
  text-indent: 1px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  width: 100%;

  &:active,
  &:focus: {
    border-color: #66afe9;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);
    outline: 0;
  }
`;

const styledCaret = css`
  border-left: 1px solid #ccc;
  line-height: 20px;
  margin-top: 11px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 50px;
  z-index: 10;
`;

const styledLabel = css`
  display: inline-block;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  max-width: 100%;
`;

const Select = (props) => {
  const { label, options, onChange } = props;

  const renderOptions = options.map(o => (
    <option key={o.value} value={o.value} name={o.label}>
      {o.label}
    </option>
  ));

  const renderLabel = label ? (
    <label className={styledLabel} htmlFor={label}>
      {label}
    </label>
  ) : (
    false
  );

  return (
    <div>
      {renderLabel}
      <div style={{ position: 'relative' }}>
        <select className={styledSelect} id={label} name={label} onChange={onChange}>
          {renderOptions}
        </select>
        <span className={styledCaret}>
          <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 8a.828.828 0 0 1-.594-.252l-5.16-5.28a.874.874 0 0 1 0-1.216.827.827 0 0 1 1.189 0L7 5.924l4.565-4.672a.827.827 0 0 1 1.189 0 .874.874 0 0 1 0 1.216l-5.16 5.28A.828.828 0 0 1 7 8z"
              fill="#787878"
              fillRule="nonzero"
              stroke="#787878"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
};

export default Select;
