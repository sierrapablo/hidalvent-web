import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component.
 *
 * @param {Object} props - Component props.
 * @param {string} props.label - Button label.
 * @param {string} props.className - Button class name.
 * @param {function} props.onClick - Button click handler.
 * @param {boolean} props.disabled - Button disabled state.
 * @returns {JSX.Element} Button component.
 * 
 */
const Button = ({ label, className = "", onClick, disabled = false }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
