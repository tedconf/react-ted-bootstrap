import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Caret from '../utils/Caret';

const styledLabel = css`
  align-items: center;
  color: #444;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  margin: 10px 0;
`;

const dropdownList = css`
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  display: none;
  float: left;
  font-size: 14px;
  left: 0;
  list-style: none;
  margin: 2px 0 0;
  min-width: 160px;
  padding: 5px 0;
  position: absolute;
  text-align: left;
  top: 100%;
  z-index: 1000;
`;

const expandedStyle = css`
  display: block !important;
`;

const dropdownItem = css`
  clear: both;
  color: #333333;
  cursor: pointer;
  display: block;
  font-weight: normal;
  line-height: 1.42857;
  padding: 3px 20px;
  white-space: nowrap;

  &:hover,
  &:active,
  &:focus {
    color: #262626;
    background-color: #f5f5f5;
  }
`;

export default class Dropdown extends Component {
  state = {
    expanded: false,
    selected: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  onClick = (e, value) => {
    e.preventDefault();

    this.setState({ expanded: false });

    this.props.onClick(value);
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      this.state.expanded
    ) {
      this.toggleExpanded();
    }
  };

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { selected, expanded } = this.state;
    const expandedClass = expanded ? expandedStyle : '';
    const label = selected ? selected : this.props.options[0].label;
    const options = this.props.options.map(opt => (
      <li
        className={dropdownItem}
        key={`${opt.label}${opt.index}`}
        onClick={e => this.onClick(e, opt.label)}
      >
        {opt.label}
      </li>
    ));

    return (
      <div style={{ position: 'relative' }} ref={this.setWrapperRef}>
        <div className={styledLabel} onClick={() => this.toggleExpanded()}>
          <span style={{ marginRight: '6px' }}>{label}</span>
          <Caret />
        </div>
        <ul
          className={cx(dropdownList, expandedClass)}
          aria-expanded={expanded}
        >
          {options}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  onClick: PropTypes.func,
};
