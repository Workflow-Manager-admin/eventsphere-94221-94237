import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faCalendarAlt, 
  faPlusCircle, 
  faUserCircle,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

/**
 * Navigation bar component
 * @returns {React.Component} - Navbar component
 */
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: faHome },
    { path: '/events', label: 'Explore Events', icon: faCalendarAlt },
    { path: '/create', label: 'Create Event', icon: faPlusCircle },
    { path: '/profile', label: 'My Profile', icon: faUserCircle }
  ];
  
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <span className="logo-symbol">●</span>
          EventSphere
        </Link>
        
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
              onClick={closeMobileMenu}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
