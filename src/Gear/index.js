import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Icon from './Icon';
import Header from './Header';
import Item from './Item';
import Divider from './Divider';

class Gear extends Component {
  static Header = Header;
  static Item = Item;
  static Divider = Divider;
  
  constructor(props) {
    super(props);

    this.state = {
      listOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  
  render() {
    const { children, right } = this.props;
    const { listOpen } = this.state;

    return (
      <StyledDropdown eventTypes='click'>
        <StyledToggle onClick={() => this.toggle()}>
          <Icon />
        </StyledToggle>
        {listOpen && 
          <StyledList right={right}>
            {children}
          </StyledList>}
      </StyledDropdown>
    );
  }
}

const StyledDropdown = glamorous.div({
  position: 'relative',
  display: 'inline-block',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
});

const StyledToggle = glamorous.div({
  display: 'inline-block'
})

const StyledList = glamorous.ul({
  position: 'absolute',
  top: '100%',
  left: '0',
  zIndex: '1000',
  float: 'left',
  minWidth: '160px',
  padding: '5px 0',
  margin: '2px 0 0',
  listStyle: 'none',
  fontSize: '14px',
  textAlign: 'left',
  backgroundColor: '#fff',
  border: '1px solid rgba(0, 0, 0, .15)',
  borderRadius: '4px',
  boxShadow: '0 6px 12px rgba(0,0,0,.175)',
  backgroundClip: 'padding-box',
}, (props) => {
  if (props.right) {
    return {
      right: 0,
      left: 'auto',
    }
  }
});

Gear.propTypes = {
  children: PropTypes.node.isRequired,
  right: PropTypes.bool
};

export default Gear;