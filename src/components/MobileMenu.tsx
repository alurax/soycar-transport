import { useState, useEffect } from 'react';

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
          <a href="/" className="mobile-logo">
            <img src="/rectangle_logo.png" alt="Soycar Logo" className="mobile-logo-img" />
          </a>
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
            <a href="/" onClick={handleLinkClick}>
              <span className="menu-icon">🏠</span>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleLinkClick}>
              <span className="menu-icon">🚗</span>
              Tours & Services
            </a>
          </li>
          <li><a href="/travel-guide">Travel Guide</a></li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              <span className="menu-icon">📞</span>
              Contact
            </a>
          </li>
        </ul>

        <div className="mobile-menu-footer">
          <p className="mobile-menu-contact">
            📧 soycartransportcarrrentals@gmail.com<br/>
            📱 +63 927 224 4732
          </p>
          <div className="mobile-menu-socials">
            <a href="https://www.facebook.com/soycartransportpalawan" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">👍</span>
            </a>
            <a href="https://www.instagram.com/soycartransportpalawan/" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">📷</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
