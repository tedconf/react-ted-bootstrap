import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const styledTable = css`
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  margin-bottom: 20px;
  max-width: 100%;
  width: 100%;
`;

const styledThead = css`
  border-bottom: 1px solid #808080;
  border-color: inherit;
  border-top: 2px solid #808080;
  display: table-header-group;
  vertical-align: middle;
`;

const styledRow = {
  base: css`
    background-color: transparent;
  `,
  active: css`
    background-color: whitesmoke;
  `,
  success: css`
    background-color: #e0efd5;
  `,
  info: css`
    background-color: #deeef5;
  `,
  warning: css`
    background-color: #fcf7e7;
  `,
  danger: css`
    background-color: #f2d2cf;
  `,
};

const styledTh = css`
  font-weight: 700;
  padding: 15px 10px;
  text-align: left;
`;

const sortable = css`
  cursor: pointer;
`;

const styledTd = css`
  border-top: 1px solid #e3e3e3;
  line-height: 1.42857;
  padding: 15px 10px;
  vertical-align: top;
`;

const flexDiv = css`
  display: flex;
  align-items: center;
`;


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
          const isSortable = h.sortable !== undefined && h.sortable;
          const sortableClass = isSortable ? sortable : '';

          return (
            <th
              key={index}
              className={`${styledTh} ${sortableClass}`}
              onClick={() => this.onSort(index, isSortable)}
            >
              <div className={flexDiv}>
                {h.label}
                {this.renderCaret(index)}
              </div>
            </th>
          );
        })}
      </tr>
    );
  }

  buildRows(rows) {
    return rows.map((row, index) => (
      <tr
        key={index}
        className={`${styledRow[row.className ? row.className : 'base']}`}
      >
        {row.data.map((cell, cellindex) => (
          <td className={styledTd} key={cellindex}>
            {cell}
          </td>
        ))}
      </tr>
    ));
  }

  renderCaret(column) {
    if (this.state.sorted !== column) return;

    const rotate = this.state.sortDirection === 'desc' ? 'rotateX(180deg)' : '';

    return (
      <svg
        width="10"
        height="6"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: rotate, marginLeft: '4px' }}
      >
        <path
          d="M9.814.198A.583.583 0 0 0 9.374 0H.626a.583.583 0 0 0-.44.198A.663.663 0 0 0 0 .667c0 .18.062.336.186.468L4.56 5.802a.583.583 0 0 0 .88 0l4.374-4.667A.663.663 0 0 0 10 .667a.663.663 0 0 0-.186-.47z"
          fill="#000"
          fillRule="nonzero"
        />
      </svg>
    );
  }

  render() {
    const { headings, rows } = this.props;

    return (
      <table className={styledTable}>
        <thead className={styledThead}>{this.buildHeadings(headings)}</thead>
        <tbody>{this.buildRows(rows)}</tbody>
      </table>
    );
  }
}

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
