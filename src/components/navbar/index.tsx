import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaUserCircle, FaCube, FaRegEnvelope } from 'react-icons/fa';

function Navbar() {
  const links = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/about', label: 'About', icon: FaUserCircle },
    { to: '/projects', label: 'Projects', icon: FaCube },
    { to: '/contact', label: 'Contact', icon: FaRegEnvelope },
  ];
  return (
    <nav className="navbar">
      {links.map(({ to, label, icon: Icon }) => (
        <Link key={to} className="nav-link flex items-center gap-2" to={to}>
          {Icon && <Icon className="ml-1 text-gray-500" size={16} />}
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;