import React from 'react';
import PropTypes from 'prop-types';

/*
 * Image component
 * @param {string} src - Image source
 * @param {string} alt - Image alt text
 * @param {string} className - Class name for the image
 * @returns {JSX.Element} - Image component
 *
 */
const Image = ({ src, alt, className = "" }) => {
  return (
    <img src={src} alt={alt} className={className} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;
