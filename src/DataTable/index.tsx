/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Component } from 'react';
import Caret from '../utils/Caret';

interface Heading {
  label: string;
  sortable?: boolean;
}

interface Row {
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
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

const styledTable = css`
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: inherit;
  font-size: 1em;
  max-width: 100%;
  width: 100%;

  tr td:nth-of-type(1),
  tr th:nth-of-type(1) {
    padding-left: 0;
  }

  tr td:nth-last-of-type(1),
  tr th:nth-last-of-type(1) {
    padding-right: 0;
  }
`;

const styledThead = css`
  border-color: inherit;
  border-top: 1px solid #e3e3e3;
  display: table-header-group;
  vertical-align: middle;
`;

const styledRow = css`
  &[data-style='base'] {
    background-color: transparent;
  }

  &[data-style='active'] {
    background-color: whitesmoke;
  }

  &[data-style='success'] {
    background-color: #e0efd5;
  }

  &[data-style='info'] {
    background-color: #deeef5;
  }

  &[data-style='warning'] {
    background-color: #fcf7e7;
  }

  &[data-style='danger'] {
    background-color: #f2d2cf;
  }
`;

const styledTh = css`
  font-weight: 700;
  padding: 0.75em 1em;
  text-align: left;

  &[data-sortable='true'] {
    cursor: pointer;
  }
`;

const styledTd = css`
  border-top: 1px solid #e3e3e3;
  line-height: 1.42857;
  padding: 1.25em 1em;
  vertical-align: top;
`;

const flexDiv = css`
  display: flex;
  align-items: center;

  span {
    margin-right: 0.4em;
  }
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

  private handleClick = (
    e: React.MouseEvent,
    onClick: (e: React.MouseEvent) => void,
  ) => {
    // Don't call onClick methods if the user is clicking on a link or button
    if (
      e.currentTarget.tagName === 'A' ||
      e.currentTarget.tagName === 'BUTTON'
    ) {
      return false;
    }

    return onClick(e);
  };

  buildHeadings = (headings: Heading[] | undefined) => {
    if (!headings) return;

    return (
      <tr>
        {headings.map((h, index) => {
          const isSortable = h.sortable !== undefined && h.sortable;

          return (
            <th
              key={index}
              css={styledTh}
              onClick={() => this.onSort(index, isSortable)}
              data-testid="tableHeading"
              data-sortable={isSortable}
            >
              <div css={flexDiv}>
                <span>{h.label}</span>
                {isSortable ? this.renderCaret(index) : null}
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
      return (
        <tr
          key={`dataTabe-${index}`}
          css={styledRow}
          onClick={e => (row.onClick ? this.handleClick(e, row.onClick) : null)}
          data-testid="tableRow"
          data-style={row.className || 'base'}
        >
          {row.data.map((cell, cellindex) => (
            <td css={styledTd} key={`dataTable-${index}-${cellindex}`}>
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
      <table css={styledTable}>
        <thead css={styledThead} data-testid="tableHead">
          {this.buildHeadings(headings)}
        </thead>
        <tbody data-testid="tableBody">{this.buildRows(rows)}</tbody>
      </table>
    );
  }
}
