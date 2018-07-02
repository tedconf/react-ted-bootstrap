import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import mediaQueries from '../utils/media-queries';

const styledContainer = css`
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

const Container = (props) => {
  const { children } = props;
  return (
    <div className={styledContainer}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
