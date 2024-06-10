import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className="flex space-x-6">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/Mvs">Mvs</NavLink>
      <NavLink href="/DanceP">DanceP</NavLink>
    </nav>
  );
};

export default Navbar;
