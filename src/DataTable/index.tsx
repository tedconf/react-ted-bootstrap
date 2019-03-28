import { css, cx } from 'emotion';
import React, { Component } from 'react';
import Caret from '../utils/Caret';

interface Heading {
  label: string;
  sortable?: boolean;
}

interface Row {
  className?: string;
  onClick?: () => void;
  data: any[];
}

interface Props {
  /** An object containing two keys: label (string) and sortable (bool) */
  headings?: Heading[];
  /** An object containing two keys: data (an array of column values)
   * and className (string) */
  rows?: Row[];
  /** A callback function when a column heading is sorted,
   * returns column index and sort direction */
  onSort?: (column: number, sortDirection: string) => void;
}

interface StyledRow {
  [key: string]: string;
}

const styledTable = css`
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: inherit;
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

const styledRow: StyledRow = {
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

export default class DataTable extends Component<Props> {
  state = {
    sorted: 0,
    sortDirection: 'desc',
  };

  onSort = (column: number, isSortable: boolean) => {
    if (!isSortable || !this.props.onSort) return null;

    const { sorted } = this.state;
    const sortDirection = this.setSortDirection(sorted, column);

    this.setState({
      sorted: column,
      sortDirection,
    });

    return this.props.onSort(column, sortDirection);
  };

  setSortDirection = (oldCol: number, newCol: number) => {
    const { sortDirection } = this.state;

    return sortDirection === 'asc' && oldCol === newCol ? 'desc' : 'asc';
  };

  private handleClick = (e: React.MouseEvent, onClick: () => void) => {
    // Don't call onClick methods if the user is clicking on a link or button
    if (
      e.currentTarget.tagName === 'A' ||
      e.currentTarget.tagName === 'BUTTON'
    ) {
      return false;
    }

    return onClick();
  };

  buildHeadings = (headings: Heading[] | undefined) => {
    if (!headings) return;

    return (
      <tr>
        {headings.map((h, index) => {
          const isSortable = h.sortable !== undefined && h.sortable;
          const sortableClass = isSortable ? sortable : '';

          return (
            <th
              key={index}
              className={cx(styledTh, sortableClass)}
              onClick={() => this.onSort(index, isSortable)}
              data-testid="tableHeading"
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
  };

  buildRows = (rows: Row[] | undefined) => {
    if (!rows) return;

    return rows.map((row, index) => {
      const className = row.className || 'base';

      return (
        <tr
          key={index}
          className={styledRow[className]}
          onClick={e => (row.onClick ? this.handleClick(e, row.onClick) : null)}
          data-testid="tableRow"
        >
          {row.data.map((cell, cellindex) => (
            <td className={styledTd} key={cellindex}>
              {cell}
            </td>
          ))}
        </tr>
      );
    });
  };

  renderCaret = (column: number) => {
    if (this.state.sorted !== column) return;

    const rotate = this.state.sortDirection === 'desc' ? 'rotateX(180deg)' : '';

    return <Caret rotate={rotate} />;
  };

  render() {
    const { headings, rows } = this.props;

    return (
      <table className={styledTable}>
        <thead className={styledThead} data-testid="tableHead">
          {this.buildHeadings(headings)}
        </thead>
        <tbody data-testid="tableBody">{this.buildRows(rows)}</tbody>
      </table>
    );
  }
}