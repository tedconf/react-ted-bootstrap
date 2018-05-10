import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

export default class DataTable extends Component {
  constructor() {
    super();

    this.state = {
      sorted: '',
      sortDirection: 'desc',
    };
  }

  onSort(column, isSortable) {
    if (!isSortable || !this.props.onSort) return;

    const { sorted } = this.state;
    const sortDirection = this.setSortDirection(sorted, column);

    this.setState({
      sorted: column,
      sortDirection,
    });

    this.props.onSort(column, sortDirection);
  }

  setSortDirection(oldCol, newCol) {
    const { sortDirection } = this.state;

    return sortDirection === 'asc' && oldCol === newCol ? 'desc' : 'asc';
  }

  buildHeadings(headings) {
    return (
      <tr>
        {headings.map((h, index) => {
          const isSortable = (h.sortable !== undefined) && h.sortable;

          return (
            <StyledTh
              key={index}
              onClick={() => this.onSort(index, isSortable)}
              isSortable={isSortable}
            >
              <FlexDiv>
                {h.label}
                {this.renderCaret(index)}
              </FlexDiv>
            </StyledTh>
         );
        })}
      </tr>
    );
  }

  buildRows(rows) {
    return rows.map((row, index) => (
      <StyledRow key={index} className={row.className ? row.className : ''}>
        {row.data.map((cell, cellindex) => <StyledTd key={cellindex}>{cell}</StyledTd>)}
      </StyledRow>
    ));
  }

  renderCaret(column) {
    if (this.state.sorted !== column) return;

    const rotate = this.state.sortDirection === 'desc' ? 'rotateX(180deg)' : '';

    return (
      <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" style={{ transform: rotate, marginLeft: '4px' }}>
        <path d="M9.814.198A.583.583 0 0 0 9.374 0H.626a.583.583 0 0 0-.44.198A.663.663 0 0 0 0 .667c0 .18.062.336.186.468L4.56 5.802a.583.583 0 0 0 .88 0l4.374-4.667A.663.663 0 0 0 10 .667a.663.663 0 0 0-.186-.47z" fill="#000" fillRule="nonzero"/>
      </svg>
    );
  }

  render() {
    const {
      headings,
      rows,
    } = this.props;

    return (
      <StyledTable>
        <StyledThead>
          {this.buildHeadings(headings)}
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
}, (props) => {
  if (props.isSortable) {
    return {
      cursor: 'pointer',
    };
  }
});

const StyledTd = glamorous.td({
  borderTop: '1px solid #e3e3e3',
  lineHeight: 1.42857,
  padding: '15px 10px',
  verticalAlign: 'top',
});

const FlexDiv = glamorous.div({
  display: 'flex',
  alignItems: 'center',
});

DataTable.propTypes = {
  /** An object containing two keys: label (string) and sortable (bool) */
  headings: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** An object containing two keys: data (an array of column values)
   * and className (string)
   */
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** A callback function when a column heading is sorted,
   * returns column index and sort direction
   */
  onSort: PropTypes.func,
};
