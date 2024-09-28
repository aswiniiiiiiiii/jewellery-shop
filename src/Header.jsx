import React, { useState } from 'react';
import './Navbar.css'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#heading" className="navbar-brand">Aura</a>

        <div className="menu-toggler">
          <button className="navbar-toggler" onClick={toggleMenu}>
            {!isOpen ? (
              <span className="navbar-toggler-icon"></span> 
            ) : (
              <span className="navbar-toggler-icon close-btn"></span> 
            )}
          </button>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#Category" className="nav-link">Category</a>
          <a href="#offers" className="nav-link">Offers</a>
          <a href="#collections" className="nav-link">Collections</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
