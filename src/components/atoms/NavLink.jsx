import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ to, label, active=false, className=""}) => {
  return(
    <Link
      to={to}
      className={className}
    >
      {label}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
};

export default NavLink;
