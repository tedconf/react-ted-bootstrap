import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Icon from './Icon';
import Header from './Header';
import Item from './Item';
import Divider from './Divider';

const styledDropdown = css`
  position: relative;
  display: inline-block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const styledToggle = css`
  cursor: pointer;
  display: inline-block;
`;

const styledList = css`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
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

const align = {
  right: css`
    right: 0;
    left: auto;
  `,
};

class Gear extends Component {
  static Header = Header;
  static Item = Item;
  static Divider = Divider;

  constructor(props) {
    super(props);

    this.state = {
      listOpen: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  };

  render() {
    const { children, right } = this.props;
    const { listOpen } = this.state;
    const alignClass = right ? 'right' : '';

    return (
      <div className={styledDropdown} eventTypes="click">
        <div className={styledToggle} onClick={() => this.toggle()}>
          <Icon />
        </div>
        {listOpen && <ul className={`${styledList} ${align[alignClass]}`}>{children}</ul>}
      </div>
    );
  }
}

Gear.propTypes = {
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
};

export default Gear;
