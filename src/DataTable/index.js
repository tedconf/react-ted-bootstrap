import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

export default class DataTable extends Component {
  constructor() {
    super();

    this.state = {
      sorted: '',
    };
  }

  onSort(column) {
    this.setState({ sorted: column });

    if (this.props.onSort) {
      this.props.onSort(column);
    }
  }

  buildHeadings(headings, sortable) {
    return (
      <tr>
        {headings.map((h, index) => {
          const sort = sortable && sortable[index] ? this.onSort(index) : false;
          return (
            <StyledTh
              onClick={sort}
            >
              {h}
            </StyledTh>
         );
        })}
      </tr>
    );
  }

  buildRows(rows) {
    return rows.map(row => (
      <StyledRow className={row.className ? row.className : ''}>
        {row.data.map(cell => <StyledTd>{cell}</StyledTd>)}
      </StyledRow>
    ));
  }

  render() {
    const {
      headings,
      rows,
      sortable,
    } = this.props;

    return (
      <StyledTable>
        <StyledThead>
          {this.buildHeadings(headings, sortable)}
        </StyledThead>
        <tbody>
          {this.buildRows(rows)}
        </tbody>
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

const StyledRow = glamorous.tr({
  backgroundColor: 'transparent',
}, (props) => {
  switch (props.className) {
    case 'active':
      return {
        backgroundColor: 'whitesmoke',
      };
    case 'success':
      return {
        backgroundColor: '#e0efd5',
      };
    case 'info':
      return {
        backgroundColor: '#deeef5',
      };
    case 'warning':
      return {
        backgroundColor: '#fcf7e7',
      };
    case 'danger':
      return {
        backgroundColor: '#f2d2cf',
      };
    default:
      break;
  }
});

const StyledTh = glamorous.th({
  padding: '15px 10px',
  textAlign: 'left',
});

const StyledTd = glamorous.td({
  borderTop: '1px solid #e3e3e3',
  lineHeight: 1.42857,
  padding: '15px 10px',
  verticalAlign: 'top',
});

DataTable.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortable: PropTypes.arrayOf(PropTypes.bool),
  onSort: PropTypes.func,
};
