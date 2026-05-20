export default function Footer() {
  return (
    <div id="contact" className="app-container">
      <footer>
        <div className="footer-content">
          <div className="footer-col">
            <h3>Soycar Transport and Services</h3>
            <p>Your premium gateway to the ultimate Palawan experience.</p>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>El Nido, Palawan, Philippines</p>
            <p><a href="mailto:soycartransportcarrrentals@gmail.com">soycartransportcarrrentals@gmail.com</a></p>
            <p><a href="tel:+639272244732">+63 927 224 4732</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Soycar Transport and Services. All rights reserved.</p>
          <p>Powered by Raxx</p>
        </div>
      </footer>
    </div>
  );
}