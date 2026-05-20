import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isScrolled: boolean;
}

export default function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`mobile-header ${isScrolled ? 'scrolled' : ''}`}>
        <button
          className={`burger-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <div className="mobile-logo-container">
          <Link to="/" className="mobile-logo" onClick={handleLinkClick}>
            <img src="/rectangle_logo.png" alt="Soycar Logo" className="mobile-logo-img" />
          </Link>
        </div>

        <div className="mobile-header-spacer"></div>
      </nav>

      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>

      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src="/rectangle_logo.png" alt="Soycar Logo" className="mobile-menu-logo" />
        </div>

        <ul className="mobile-menu-links">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <a href="#services" onClick={handleLinkClick}>
              Tours & Services
            </a>
          </li>
          <li>
            <Link to="/travel-guide" onClick={handleLinkClick}>
              Travel Guide
            </Link>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>

        <div className="mobile-menu-footer">
          <p className="mobile-menu-contact">
            Email: soycartransportcarrrentals@gmail.com<br/>
            Phone: +63 927 224 4732
          </p>
          <div className="mobile-menu-socials">
            <a href="https://www.facebook.com/soycartransportpalawan" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="social-icon">Facebook</span>
            </a>
            <a href="https://www.instagram.com/soycartransportpalawan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="social-icon">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}