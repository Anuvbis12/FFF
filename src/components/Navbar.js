import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Apollo</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isOpen ? 'bar1 open' : 'bar1'}></div>
        <div className={isOpen ? 'bar2 open' : 'bar2'}></div>
        <div className={isOpen ? 'bar3 open' : 'bar3'}></div>
      </div>
      <ul className={isOpen ? 'navbar-links active' : 'navbar-links'}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
