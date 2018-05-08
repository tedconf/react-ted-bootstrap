import React, { Component } from 'react';
import glamorous from 'glamorous';
/* eslint-disable */
export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      value: '',
    };
  }

  renderOptions(options) {
    return options.map(o => <option value={o.value} name={o.label}>{o.label}</option>);
  }

  render() {
    const { options, onChange } = this.props;
    return (
      <div>
        <select onChange={onChange}>
          {this.renderOptions(options)}
        </select>
      </div>
    );
  }
}

const StyledSelect = glamorous.select({
  color: '#000',
  display: 'none',
});
