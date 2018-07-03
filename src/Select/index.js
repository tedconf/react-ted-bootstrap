import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles';
import { Provider } from './context';

import Divider from './Divider';
import Header from './Header';
import Item from './Item';

export default class Select extends Component {
  static Header = Header;

  static Item = Item;

  static Divider = Divider;

  constructor(props) {
    super(props);

    this.state = {
      listOpen: false,
      current: false,
      onChange: value => this.onChange(value),
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  onChange(value) {
    this.setState({ listOpen: false, current: value });
    this.props.onChange(value);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  toggleOpen() {
    this.setState({ listOpen: !this.state.listOpen });
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      this.state.listOpen
    ) {
      this.toggleOpen();
    }
  }

  render() {
    const { label, multi, children } = this.props;
    const { listOpen, current } = this.state;

    const selected = multi ? label : current || label;

    return (
      <Provider value={this.state}>
        <div className={styles.container} ref={this.setWrapperRef}>
          <button
            type="button"
            className={styles.styledSelect}
            onClick={this.toggleOpen}
          >
            {selected}
            <span className={styles.styledCaret}>
              <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 8a.828.828 0 0 1-.594-.252l-5.16-5.28a.874.874 0 0 1 0-1.216.827.827 0 0 1 1.189 0L7 5.924l4.565-4.672a.827.827 0 0 1 1.189 0 .874.874 0 0 1 0 1.216l-5.16 5.28A.828.828 0 0 1 7 8z"
                  fill="#787878"
                  fillRule="nonzero"
                  stroke="#787878"
                />
              </svg>
            </span>
          </button>
          {listOpen && <ul className={styles.styledList}>{children}</ul>}
        </div>
      </Provider>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  multi: PropTypes.bool,
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
};
