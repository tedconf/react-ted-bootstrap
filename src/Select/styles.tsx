import { css } from '@emotion/core';

export const container = css`
  display: inline-block;
  position: relative;
`;

export const styledList = css`
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  float: left;
  font-family: inherit;
  font-size: 14px;
  left: 0;
  list-style: none;
  margin: 2px 0 0;
  max-height: 500px;
  min-width: 160px;
  overflow-y: auto;
  padding: 5px 0;
  position: absolute;
  text-align: left;
  top: 100%;
  z-index: 1000;
`;

export const styledSelect = css`
  appearance: none;
  background: linear-gradient(#fff, #f2f2f2);
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: none;
  color: #666;
  cursor: pointer;
  display: block;
  font-family; inherit;
  font-size: 13px;
  height: 40px;
  line-height: 22px;
  padding: 9px 12px;
  padding-right: 63px;
  position: relative;
  text-indent: 1px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &:hover {
    color: #444;
  }

  &:active,
  &:focus {
    border-color: #66afe9;
    color: #444;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
    outline: 0;
  }
`;

export const styledCaret = css`
  border-left: 1px solid #ccc;
  line-height: 20px;
  margin-top: 11px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 50px;
  z-index: 10;
`;

export const styledLabel = css`
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  max-width: 100%;
`;

export const dividerStyles = css`
  background-color: #e5e5e5;
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
`;

export const headerStyles = css`
  color: #999;
  display: block;
  font-size: 12px;
  line-height: 1.42;
  padding: 3px 20px;
  white-space: nowrap;
`;
