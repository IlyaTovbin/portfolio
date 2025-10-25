import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link className="nav-link" to="/" viewTransition>Home</Link>
      <Link className="nav-link" to="/about" viewTransition>About</Link>
      <Link className="nav-link" to="/projects" viewTransition>Projects</Link>
      <Link className="nav-link" to="/contact" viewTransition>Contact</Link>
    </nav>
  );
}

export default Navbar;