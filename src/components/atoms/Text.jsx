import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ content, className = "" }) => {
  return (
    <p className={className}>
      {content}
    </p>
  );
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Text;
