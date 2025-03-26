import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Banking', path: '/banking' },
    { name: 'Services', path: '/services' },
    { name: 'Transactions', path: '/transactions' },
  ];

  return (
    <header className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="flex items-center">
          <Link to="/" className="nav-brand">
            Atlas Bank
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="nav-buttons">
          <Link to="/register">
            <button className="btn btn-outline btn-sm">Sign Up</button>
          </Link>
          <Link to="/profile">
            <button className="btn btn-primary btn-sm">
              <span>Profile</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mobile-menu">
            <nav className="mobile-links">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mobile-divider"></div>
              <Link to="/register" className="btn btn-outline btn-sm">Sign Up</Link>
              <Link to="/profile" className="btn btn-primary btn-sm">Profile</Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
