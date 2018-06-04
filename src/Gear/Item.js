import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const Item = (props) => (
  <StyledItem>{props.children}</StyledItem>
);

const StyledItem = glamorous.li({
  ["& > a"]: {
    display: 'block',
    padding: '3px 20px',
    clear: 'both',
    fontWeight: '400',
    lineHeight: '1.42',
    color: '#333',
    whiteSpace: 'nowrap',
    textDecoration: 'none',

    ["&:hover"]: {
      color: '#262626',
      backgroundColor: '#f5f5f5'
    }
  }
})

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Item;