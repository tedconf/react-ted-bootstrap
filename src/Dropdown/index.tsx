/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Component } from 'react';
import Caret from '../utils/Caret';

interface Props {
  /** A callback function when the dropdown is clicked */
  onClick?: (value: string) => void;
  options: any[];
}

const styledLabel = css`
  align-items: center;
  color: #444;
  cursor: pointer;
  display: flex;
  font-family: inherit;
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
  font-family: inherit;
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

  &[data-expanded='true'] {
    display: block !important;
  }
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
    background-color: #f5f5f5;
    color: #262626;
  }
`;

export default class Dropdown extends Component<Props> {
  private wrapperRef: React.RefObject<HTMLInputElement>;

  state = {
    expanded: false,
    selected: false,
  };

  constructor(props: Props) {
    super(props);

    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  onClick = (e: React.MouseEvent, value: string) => {
    e.preventDefault();

    this.setState({ expanded: false });

    return this.props.onClick ? this.props.onClick(value) : null;
  };

  handleClickOutside = (e: Event) => {
    const targetNode = e.target instanceof Node ? e.target : null;

    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(targetNode) &&
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
    const label = selected ? selected : this.props.options[0].label;
    const options = this.props.options.map(opt => (
      <li
        css={dropdownItem}
        key={`${opt.label}${opt.index}`}
        onClick={e => this.onClick(e, opt.label)}
        data-testid="dropdownItem"
      >
        {opt.label}
      </li>
    ));

    return (
      <div style={{ position: 'relative' }} ref={this.wrapperRef}>
        <div css={styledLabel} onClick={() => this.toggleExpanded()}>
          <span style={{ marginRight: '6px' }}>{label}</span>
          <Caret />
        </div>
        <ul
          aria-expanded={expanded}
          css={dropdownList}
          data-expanded={expanded}
          data-testid="dropdownList"
        >
          {options}
        </ul>
      </div>
    );
  }
}
