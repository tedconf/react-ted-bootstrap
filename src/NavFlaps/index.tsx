/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Component } from 'react';

export interface NavProps {
  onClick?: (index: number) => void;
  type?: 'primary' | 'subnav';
  selected?: number;
  children: React.ReactElement[];
}

export interface TabProps {
  content: React.ReactElement;
  label: string;
}

const navRow = css`
  border-bottom: 1px solid #ddd;
  display: flex;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  list-style: none;
  padding: 0;
  width: 100%;
`;

const subNavRow = css`
  border-bottom: 1px solid #ddd;
  display: flex;
  font-size: 16px;
  list-style: none;
  padding: 0;
  width: 100%;
`;

const navLabel = css`
  border-bottom: 3px solid transparent;
  color: #333333;
  cursor: pointer;
  margin-right: 30px;
  padding: 7px 0 4px;

  &[data-selected='true'] {
    background-color: transparent;
    border-bottom-color: #e62b1e;

    &[data-type='subnav'] {
      background-color: transparent;
      border-bottom-color: #666;
    }
  }
`;

export const Tab = ({ content }: TabProps) => <div>{content}</div>;

export default class NavFlaps extends Component<NavProps> {
  state = {
    selected: 0,
  };

  handleChange = (index: number) => {
    this.setState({ selected: index });
  };

  doClick = (index: number) => {
    if (this.props.onClick) {
      return this.props.onClick(index);
    }

    return this.handleChange(index);
  };

  render() {
    const { children, type, selected } = this.props;
    const isSelected = selected || this.state.selected;
    const wrapperClass = type && type === 'subnav' ? subNavRow : navRow;

    return (
      <div data-testid="navFlaps">
        <ul css={wrapperClass}>
          {children.map((elem, index) => {
            return (
              <li
                css={navLabel}
                data-selected={index === isSelected}
                data-testid={`navLabel${index}`}
                data-type={type || 'primary'}
                key={index}
                onClick={() => this.doClick(index)}
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
