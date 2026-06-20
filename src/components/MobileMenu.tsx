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
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className={`mobile-nav ${isScrolled ? 'mobile-nav--scrolled' : ''}`}>
        <button
          className={`mobile-nav__toggle ${isOpen ? 'mobile-nav__toggle--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="mobile-nav__bar" />
          <span className="mobile-nav__bar" />
          <span className="mobile-nav__bar" />
        </button>

        <Link to="/" className="mobile-nav__logo" onClick={close}>
          <img src="/rectangle_logo.png" alt="Soycar Transport" />
        </Link>

        <div style={{ width: 44 }} />
      </nav>

      <div className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__backdrop" onClick={close} />
        <div className="mobile-drawer__panel">
          <div className="mobile-drawer__links">
            <Link to="/" className="mobile-drawer__link" onClick={close}>Home</Link>
            <Link to="/services" className="mobile-drawer__link" onClick={close}>Services</Link>
            <Link to="/about" className="mobile-drawer__link" onClick={close}>About</Link>
            <Link to="/travel-guide" className="mobile-drawer__link" onClick={close}>Travel Guide</Link>
            <Link to="/contact" className="mobile-drawer__link" onClick={close}>Contact</Link>
          </div>

          <div className="mobile-drawer__footer">
            <p className="mobile-drawer__contact">
              soycartransportcarrrentals@gmail.com<br />
              +63 927 224 4732
            </p>
          </div>
        </div>
      </div>
    </>
  );
}