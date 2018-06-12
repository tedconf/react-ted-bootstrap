import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Caret from '../utils/Caret';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      selected: false,
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
    const { selected, expanded } = this.state;
    const label = selected ? selected : this.props.options[0].label;
    const options = this.props.options.map(opt => <li>{opt.label}</li>);

    return (
      <div style={{ position: 'relative' }}>
        <span onClick={() => this.toggleExpanded()}>
          {label} <Caret />
        </span>
        <DropdownList expanded={expanded}>{options}</DropdownList>
      </div>
    );
  }
}

Dropdown.propTypes = {
  onClick: PropTypes.func,
};

const DropdownList = glamorous.ul(
  {
    backgroundClip: 'padding-box',
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    borderRadius: '4px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.175)',
    display: 'none',
    float: 'left',
    fontSize: '14px',
    left: 0,
    listStyle: 'none',
    margin: '2px 0 0',
    minWidth: '160px',
    padding: '5px 0',
    position: 'absolute',
    textAlign: 'left',
    top: '100%',
    zIndex: 1000,
  },
  (props) => {
    if (props.expanded) {
      return {
        display: 'block',
      };
    }
  },
);
