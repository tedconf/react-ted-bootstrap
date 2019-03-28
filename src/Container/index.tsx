import { css } from 'emotion';
import React from 'react';
import mediaQueries from '../utils/media-queries';

interface Props {
  /** text to display in the button */
  children: React.ReactChild;
}

const styledContainer = css`
  font-family: inherit;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  ${mediaQueries.small} {
    max-width: 540px;
  }

  ${mediaQueries.medium} {
    max-width: 720px;
  }

  ${mediaQueries.large} {
    max-width: 960px;
  }

  ${mediaQueries.xLarge} {
    max-width: 1170px;
  }
`;

export default ({ children }: Props) => (
  <div className={styledContainer}>{children}</div>
);
