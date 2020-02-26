/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Component } from 'react';

interface Props {
  children?: React.ReactChild[];
  label?: string;
}

interface State {
  expanded: boolean;
}

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
    display: block;
    position: relative;
  }
`;

const toggleButton = css`
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  padding: 19px 15px;

  &[data-expanded='true'] {
    background-color: #333;
    color: #eee;

    span {
      transform: rotate(180deg);
    }
  }
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  display: block;
  float: left;
  font-size: 16px;
  left: auto;
  list-style: none;
  margin: 0;
  min-width: 160px;
  padding: 5px 0;
  position: absolute;
  right: 0;
  text-align: left;
  top: 100%;
  z-index: 1000;

  a,
  button {
    clear: both;
    color: #333;
    display: block;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.42857;
    padding: 3px 20px;
    text-decoration: none;
    white-space: nowrap;

    &:hover,
    &:focus,
    &:active {
      background-color: #f5f5f5;
      color: #262626;
    }
  }
`;

export default class NavToggle extends Component<Props> {
  private wrapperRef: React.RefObject<HTMLInputElement>;

  state = {
    expanded: false,
  };

  constructor(props: Props) {
    super(props);

    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (e: Event) => {
    const targetNode = e.target instanceof Node ? e.target : null;

    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(targetNode) &&
      this.state.expanded
    ) {
      this.toggle();
    }
  };

  toggle = () => {
    this.setState((prevState: State) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { expanded } = this.state;

    return (
      <div ref={this.wrapperRef}>
        <ul css={container}>
          <li className="event-switcher dropdown">
            <button
              aria-expanded={expanded}
              css={toggleButton}
              data-expanded={expanded}
              onClick={this.toggle}
              type="button"
            >
              {this.props.label}
              <span css={caret} />
            </button>

            {expanded ? (
              <ul css={dropdownMenu} role="menu">
                {this.props.children}
              </ul>
            ) : null}
          </li>
        </ul>
      </div>
    );
  }
}
