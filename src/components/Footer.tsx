import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container container--wide">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <img src="/rectangle_logo.png" alt="Soycar Transport" style={{ height: 40, width: 'auto' }} />
            <p>Your premium gateway to seamless travel in El Nido and Puerto Princesa. Reliable transportation, local expertise, and unforgettable experiences.</p>
          </div>

          <div>
            <h4 className="site-footer__heading">Services</h4>
            <div className="site-footer__links">
              <Link to="/services" className="site-footer__link">Airport Transfers</Link>
              <Link to="/services" className="site-footer__link">City Transfers</Link>
              <Link to="/services" className="site-footer__link">Inland Tours</Link>
              <Link to="/services" className="site-footer__link">Car Rentals</Link>
            </div>
          </div>

          <div>
            <h4 className="site-footer__heading">Company</h4>
            <div className="site-footer__links">
              <Link to="/about" className="site-footer__link">About Us</Link>
              <Link to="/travel-guide" className="site-footer__link">Travel Guide</Link>
              <Link to="/contact" className="site-footer__link">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="site-footer__heading">Contact</h4>
            <div className="site-footer__links">
              <span className="site-footer__link">El Nido, Palawan, Philippines</span>
              <a href="mailto:soycartransportcarrrentals@gmail.com" className="site-footer__link">
                soycartransportcarrrentals@gmail.com
              </a>
              <a href="tel:+639272244732" className="site-footer__link">+63 927 224 4732</a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {new Date().getFullYear()} Soycar Transport & Services. All rights reserved.</p>
          <p>Powered by Raxx</p>
        </div>
      </div>
    </footer>
  );
}