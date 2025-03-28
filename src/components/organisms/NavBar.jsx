import NavLink from '../atoms/NavLink';

const NavBar = () => {
  return (
    <nav className="">
      <NavLink to="/" label="Inicio" />
      <NavLink to="/" label="Sobre Nosotros" />
      <NavLink to="/services" label="Servicios" />
      <NavLink to="/gallery" label="Galería" />
      <NavLink to="/contact" label="Contacto" />
    </nav>
  );
};

export default NavBar;
