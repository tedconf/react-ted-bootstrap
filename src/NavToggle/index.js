import { css } from 'emotion';
import React, { Component } from 'react';

const container = css`
  padding-left: 0;
  list-style: none;
  margin: 0;

  a {
    padding: 10px 15px;
  }

  li a {
    position: relative;
    display: block;
  }
`;

const toggleButton = css`
  font-size: 1.3em;
`;

const caret = css`
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid;
  display: inline-block;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  width: 0;
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

          <ul className="dropdown-menu" role="menu">
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
