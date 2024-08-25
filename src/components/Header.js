import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo.png";
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img style={{ width: '50px' }} src={Logo} alt="Real Estate Logo" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/listings">Listings</Link></li>
          <li><Link to="/agents">Agents</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/auth">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
