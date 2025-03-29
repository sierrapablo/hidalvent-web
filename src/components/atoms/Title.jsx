import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, as = "h1", className = "" }) => {
  return (
    React.createElement(as, { className }, text )
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  as: PropTypes.oneOf(
    ["h1", "h2", "h3", "h4", "h5", "h6", "strong"]
  ),
  className: PropTypes.string
};

export default Title;
