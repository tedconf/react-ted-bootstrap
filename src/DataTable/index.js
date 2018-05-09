import React, { Component } from 'react';
import glamorous from 'glamorous';

export default class DataTable extends Component {
  constructor() {
    super();

    this.state = {
      sorted: false,
      sortDirection: 'asc',
    };
  }

  onSort(column) {
    return this.props.onSort ? this.props.onSort(column) : this.doSort(column);
  }

  doSort(column) {
    return false;
  }

  buildHeadings(headings) {
    return headings.map(h => <StyledTh>{h}</StyledTh>);
  }

  render() {
    const { headings, rows } = this.props;

    return (
      <StyledTable>
        <StyledThead>
          {this.buildHeadings(headings)}
        </StyledThead>
      </StyledTable>
    );
  }
}

const StyledTable = glamorous.table({
  backgroundColor: 'transparent',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '14px',
  marginBottom: '20px',
  maxWidth: '100%',
  width: '100%',
});

const StyledThead = glamorous.thead({
  borderBottom: '1px solid #808080',
  borderColor: 'inherit',
  borderTop: '2px solid #808080',
  display: 'table-header-group',
  verticalAlign: 'middle',
});

const StyledTh = glamorous.th({
  padding: '15px 10px',
});

const StyledTd = glamorous.td({
  borderTop: '1px solid #e3e3e3',
  lineHeight: 1.42857,
  padding: '15px 10px',
  verticalAlign: 'top',
});
