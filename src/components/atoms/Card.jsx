import React from 'react';
import PropTypes from 'prop-types';

/*
 * Card component
 * @param {object} props
 * @param {string} props.className - Class name for the card
 * @param {ReactNode} props.children - Children to be rendered inside the card
 * @returns {JSX.Element} - Card component
 *
 */
const Card = ({ children, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
