import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <Link to="/" className="site-header__logo">
          <img src="/rectangle_logo.png" alt="Soycar Transport" />
        </Link>

        <nav className="site-header__nav">
          <Link
            to="/"
            className={`site-header__link ${isActive('/') ? 'site-header__link--active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`site-header__link ${isActive('/services') ? 'site-header__link--active' : ''}`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`site-header__link ${isActive('/about') ? 'site-header__link--active' : ''}`}
          >
            About
          </Link>
          <Link
            to="/travel-guide"
            className={`site-header__link ${isActive('/travel-guide') ? 'site-header__link--active' : ''}`}
          >
            Guide
          </Link>
        </nav>

        <Link to="/contact" className="site-header__cta">
          Book Now
        </Link>
      </header>

      {/* Mobile Navigation */}
      <MobileMenu isScrolled={isScrolled} />
    </>
  );
}