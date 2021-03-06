/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import Container from '../Container';
import Logo from './Logo';

interface Props {
  /** application name */
  title: string;
  /** event to fire when clicking the logo area */
  onClick?: () => void;
  /** right nav menu element */
  rightMenu?: string | React.ReactElement;
}

const styledNavbar = css`
  background: #111;
  color: white;
  margin-bottom: 20px;
  min-height: 58px;
  position: relative;
`;

const brand = css`
  align-items: center;
  appearance: none;
  background: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 25px;
  font-weight: 500;
  height: 58px;
  line-height: 20px;
  outline: none;
  padding: 2px 15px 2px 0;
`;

const inner = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const navRight = css`
  display: flex;
  align-items: center;
`;

const Navbar = ({ title, onClick, rightMenu }: Props) => (
  <header css={styledNavbar}>
    <Container>
      <div css={inner}>
        <button
          type="button"
          data-testid="button"
          css={brand}
          onClick={onClick}
        >
          <Logo />
          <span data-testid="title">{title}</span>
        </button>
        <div css={navRight}>{rightMenu}</div>
      </div>
    </Container>
  </header>
);

export default Navbar;
