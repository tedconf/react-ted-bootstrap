import { css } from 'emotion';
import React, { Component } from 'react';

const navRow = css`
  border-bottom: 1px solid #ddd;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
  width: 100%;
`;

const navLabel = css`
  border-bottom: 3px solid transparent;
  color: #333333;
  cursor: pointer;
  margin-right: 30px;
  padding: 7px 0 4px;
`;

const selected = css`
  background-color: transparent;
  border-bottom-color: #e62b1e;
`;

export default class NavFlaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected || 0,
    };
  }

  handleChange(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <div data-bootstrap-type="navFlaps">
        <ul className={navRow}>
          {this.props.children.map((elem, index) => {
            const style = index === this.state.selected ? selected : '';

            return (
              <li
                className={`${navLabel} ${style}`}
                key={index}
                onClick={this.handleChange.bind(this, index)}
              >
                {elem.props.label}
              </li>
            );
          })}
        </ul>
        <div className="tab">
          {this.props.children[this.state.selected].props.content}
        </div>
      </div>
    );
  }
}
