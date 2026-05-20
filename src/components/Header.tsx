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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-logo-container">
          <Link to="/" className="header-logo">
            <img src="/rectangle_logo.png" alt="Soycar Logo" className="custom-logo" />
          </Link>
        </div>
        
        <ul className="header-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="/#services">Tours & Services</a></li>
          <li>
            <Link to="/travel-guide" className={location.pathname === '/travel-guide' ? 'active' : ''}>
              Travel Guide
            </Link>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <MobileMenu isScrolled={isScrolled} />
    </>
  );
}