import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

/**
 * PUBLIC_INTERFACE
 * Main container component for the EventSphere application
 * @param {Object} props - Component props
 * @returns {React.Component} - MainContainer component
 */
const MainContainer = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="main-container">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
      <div className="content-wrapper">
        <main className="main-content">
          {children || <Outlet />}
        </main>
      </div>
      
      <Footer />
      
      {sidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar} />}
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node
};

export default MainContainer;
