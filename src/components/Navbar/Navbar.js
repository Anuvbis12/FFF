import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // --- THIS IS THE FIX ---
  // Function to close the menu, to be called on link click
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Effect to control body scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  // Close menu on route change (this is a good fallback)
  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">APOLLO</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className="navbar-links">
        {/* Add onClick={closeMenu} to each link */}
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
