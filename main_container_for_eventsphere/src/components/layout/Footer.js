import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

/**
 * Footer component
 * @returns {React.Component} - Footer component
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <span className="logo-symbol">●</span>
            EventSphere
          </Link>
          <p className="footer-description">
            Create, manage, and attend events seamlessly with EventSphere. 
            Your all-in-one event management platform.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/" className="footer-link">Dashboard</Link>
            <Link to="/events" className="footer-link">Explore Events</Link>
            <Link to="/create" className="footer-link">Create Event</Link>
            <Link to="/profile" className="footer-link">My Profile</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Support</h4>
          <nav className="footer-nav">
            <Link to="/help" className="footer-link">Help Center</Link>
            <Link to="/faq" className="footer-link">FAQs</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Connect With Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">&copy; {new Date().getFullYear()} EventSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
