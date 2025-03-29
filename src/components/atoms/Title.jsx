import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, as, className = "" }) => {
  const Component = as || "h1";
  return (
    React.createElement(Component, { className, text })
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
