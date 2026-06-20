import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFloat from '../components/ContactFloat';
import BookingWidget from '../components/BookingWidget';

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="page-hero">
        <div className="page-hero__bg" style={{ backgroundImage: 'url(/airport_transfer.jpg)' }} />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <h1 className="page-hero__title">Get in Touch</h1>
          <p className="page-hero__subtitle">Ready to book or have questions? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <BookingWidget layout="horizontal" />

          <div style={{ marginTop: 'var(--space-4xl)' }}>
            <span className="section-label">Contact Information</span>
            <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2xl)' }}>Reach Us Directly</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-2xl)' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-md)' }}>Location</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>El Nido, Palawan<br />Philippines 5313</p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-md)' }}>Phone & WhatsApp</h3>
                <a href="tel:+639272244732" style={{ color: 'var(--text-primary)', fontSize: 'var(--text-lg)', display: 'block', marginBottom: 'var(--space-xs)' }}>+63 927 224 4732</a>
                <a href="https://wa.me/639613464499" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>WhatsApp: +63 961 346 4499</a>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-md)' }}>Email</h3>
                <a href="mailto:soycartransportcarrrentals@gmail.com" style={{ color: 'var(--text-primary)' }}>soycartransportcarrrentals@gmail.com</a>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-md)' }}>Social Media</h3>
                <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
                  <a href="https://www.facebook.com/soycartransportpalawan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Facebook</a>
                  <a href="https://www.instagram.com/soycartransportpalawan/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactFloat />
    </>
  );
}
