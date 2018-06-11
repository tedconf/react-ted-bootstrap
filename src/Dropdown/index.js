import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Caret from '../utils/Caret';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      selected: '',
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  onClick(e, value) {
    e.preventDefault();

    this.props.onClick(value);
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div>
        <a>
          TED2019 <Caret />
        </a>
        <ul>
          <li>
            <a>All entries</a>
          </li>

          <li>
            <a>Human</a>
          </li>

          <li>
            <a>System</a>
          </li>

          <li>
            <a>TED2019</a>
          </li>
        </ul>
      </div>
    );
  }
}
