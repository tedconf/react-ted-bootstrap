import { css, cx } from 'emotion';
import React, { Component } from 'react';

const navRow = css`
  border-bottom: 1px solid #ddd;
  display: flex;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
  width: 100%;
`;

const subNavRow = css`
  border-bottom: 1px solid #ddd;
  display: flex;
  font-size: 16px;
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
  width: 100%;
`;

const navLabel = css`
  border-bottom: 3px solid transparent;
  color: #333333;
  cursor: pointer;
  margin-right: 30px;
  padding: 7px 0 4px;
`;

const selectedStyle = css`
  background-color: transparent;
  border-bottom-color: #e62b1e;
`;

const subSelected = css`
  background-color: transparent;
  border-bottom-color: #666;
`;

export default class NavFlaps extends Component {
  state = {
    selected: 0,
  };

  handleChange = index => {
    this.setState({ selected: index });
  };

  render() {
    const { children, type, selected } = this.props;
    const isSelected = selected || this.state.selected;
    const wrapperClass = type && type === 'subnav' ? subNavRow : navRow;
    const selectedClass = type && type === 'subnav' ? subSelected : selectedStyle;

    return (
      <div data-bootstrap-type="navFlaps">
        <ul className={wrapperClass}>
          {children.map((elem, index) => {
            const style = index === isSelected ? selectedClass : '';

            return (
              <li
                className={cx(navLabel, style)}
                key={index}
                onClick={
                  this.props.onClick
                    ? () => this.props.onClick(index)
                    : this.handleChange.bind(this, index)
                }
              >
                {elem.props.label}
              </li>
            );
          })}
        </ul>
        {}
        <div className="tab">{children[this.state.selected].props.content}</div>
      </div>
    );
  }
}
