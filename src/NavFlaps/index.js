import React, { Component } from 'react';
import { css } from 'glamor';

const navRow = css({
  borderBottom: '1px solid #ddd',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  display: 'flex',
  fontSize: '18px',
  fontWeight: 'bold',
  listStyle: 'none',
  padding: '0',
  width: '100%',
});

const navLabel = css({
  borderBottom: '3px solid transparent',
  color: '#333333',
  cursor: 'pointer',
  marginRight: '30px',
  padding: '7px 0 4px',
});

const selected = css({
  backgroundColor: 'transparent',
  borderBottomColor: '#e62b1e',
});

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
      <div>
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
