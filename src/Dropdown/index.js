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
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  onClick(e, value) {
    e.preventDefault();

    this.setState({ expanded: false });

    this.props.onClick(value);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      this.state.expanded
    ) {
      this.toggleExpanded();
    }
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { selected, expanded } = this.state;
    const label = selected ? selected : this.props.options[0].label;
    const options = this.props.options.map(opt => (
      <DropdownItem onClick={e => this.onClick(e, opt.label)}>{opt.label}</DropdownItem>
    ));

    return (
      <div style={{ position: 'relative' }} ref={this.setWrapperRef}>
        <Label onClick={() => this.toggleExpanded()}>
          <span style={{ marginRight: '6px' }}>{label}</span>
          <Caret />
        </Label>
        <DropdownList expanded={expanded}>{options}</DropdownList>
      </div>
    );
  }
}

Dropdown.propTypes = {
  onClick: PropTypes.func,
};

const Label = glamorous.span({
  alignItems: 'center',
  color: '#444',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 1,
  margin: '10px 0',
});

const DropdownList = glamorous.ul(
  {
    backgroundClip: 'padding-box',
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    borderRadius: '4px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.175)',
    display: 'none',
    float: 'left',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
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
  props => {
    if (props.expanded) {
      return {
        display: 'block',
      };
    }
  },
);

const DropdownItem = glamorous.li({
  clear: 'both',
  color: '#333333',
  cursor: 'pointer',
  display: 'block',
  fontWeight: 'normal',
  lineHeight: 1.42857,
  padding: '3px 20px',
  whiteSpace: 'nowrap',
  ['&:hover']: {
    color: '#262626',
    backgroundColor: '#f5f5f5',
  },
});
