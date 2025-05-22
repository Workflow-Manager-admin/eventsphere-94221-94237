import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faCalendarAlt, 
  faPlusCircle, 
  faUserCircle, 
  faHeart,
  faTicketAlt,
  faCog
} from '@fortawesome/free-solid-svg-icons';

/**
 * Sidebar navigation component
 * @param {Object} props - Component props
 * @returns {React.Component} - Sidebar component
 */
const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: faHome },
    { path: '/events', label: 'Explore Events', icon: faCalendarAlt },
    { path: '/my-events', label: 'My Events', icon: faTicketAlt },
    { path: '/favorites', label: 'Favorites', icon: faHeart },
    { path: '/create', label: 'Create Event', icon: faPlusCircle },
    { path: '/profile', label: 'My Profile', icon: faUserCircle },
    { path: '/settings', label: 'Settings', icon: faCog }
  ];
  
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <Link to="/" className="logo" onClick={onClose}>
          <span className="logo-symbol">●</span>
          EventSphere
        </Link>
        <button className="sidebar-close" onClick={onClose} aria-label="Close sidebar">
          &times;
        </button>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-link ${isActive(item.path) ? 'sidebar-link-active' : ''}`}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <p className="copyright">&copy; {new Date().getFullYear()} EventSphere</p>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Sidebar;
