import { css, cx } from 'emotion';
import React, { Component } from 'react';
import Icon from '../utils/Gear';
import Divider from './Divider';
import Header from './Header';
import Item from './Item';

export interface Props {
  children: React.ReactChild | React.ReactChild[];
  right?: boolean;
}

const styledDropdown = css`
  display: inline-block;
  position: relative;
`;

const styledToggle = css`
  cursor: pointer;
  display: inline-block;
`;

const styledList = css`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
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
`;

const align = {
  right: css`
    right: 0;
    left: auto;
  `,
};

export default class Gear extends Component<Props> {
  static Header = Header;
  static Item = Item;
  static Divider = Divider;

  state = {
    listOpen: false,
  };

  toggle = () => {
    this.setState({
      listOpen: !this.state.listOpen,
    });
  };

  render() {
    const { children, right } = this.props;
    const { listOpen } = this.state;
    const alignClass = right ? align['right'] : '';

    return (
      <div className={styledDropdown}>
        <div className={styledToggle} onClick={() => this.toggle()}>
          <Icon />
        </div>
        {listOpen && <ul className={cx(styledList, alignClass)}>{children}</ul>}
      </div>
    );
  }
}
