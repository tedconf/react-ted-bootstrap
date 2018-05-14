import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import mediaQueries from '../utils/media-queries';

const Container = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
}

const StyledContainer = glamorous.div({
  width: '100%',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',

  [mediaQueries.small]: { maxWidth: '540px' },
  [mediaQueries.medium]: { maxWidth: '720px' },
  [mediaQueries.large]: { maxWidth: '960px' },
  [mediaQueries.xLarge]: { maxWidth: '1140px' },
});

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
