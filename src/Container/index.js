import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import mediaQueries from '../utils/media-queries';

const Container = props => <StyledContainer>{props.children}</StyledContainer>;

const StyledContainer = glamorous.div({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
  width: '100%',

  [mediaQueries.small]: { maxWidth: '540px' },
  [mediaQueries.medium]: { maxWidth: '720px' },
  [mediaQueries.large]: { maxWidth: '960px' },
  [mediaQueries.xLarge]: { maxWidth: '1140px' },
});

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
