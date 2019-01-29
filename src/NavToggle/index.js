import { css } from 'emotion';
import React, { Component } from 'react';

const container = css`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding-left: 0;
  position: relative;

  a {
    padding: 10px 15px;
  }

  li a {
    position: relative;
    display: block;
  }
`;

const toggleButton = css`
  -webkit-appearance: none;
  border: 0;
  color: #fff;
  outline: none;
  font-size: 18px;
  background: transparent;
  padding: 19px 15px;
`;

const caret = css`
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid;
  display: inline-block;
  height: 0;
  margin-left: 8px;
  vertical-align: middle;
  width: 0;
`;

const dropdownMenu = css`
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  display: block;
  float: left;
  font-size: 14px;
  left: auto;
  right: 0;
  list-style: none;
  margin: 2px 0 0;
  min-width: 160px;
  padding: 5px 0;
  position: absolute;
  text-align: left;
  top: 100%;
  z-index: 1000;
`;

export default class NavToggle extends Component {
  state = {
    expanded: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { expanded } = this.state;

    return (
      <ul className={container}>
        <li className="event-switcher dropdown">
          <button
            aria-expanded={expanded}
            className={toggleButton}
            type="button"
          >
            TED2019
            <span className={caret} />
          </button>

          <ul className={dropdownMenu} role="menu">
            <li>
              <a
                className="event-switcher__event active"
                href="/candidate-review/events/16645"
              >
                TED2019
              </a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
