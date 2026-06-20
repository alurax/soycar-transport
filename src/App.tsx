import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// Lazy-loaded routes
const HomePage = lazy(() => import('./pages/HomePage'));
const TourDetailPage = lazy(() => import('./pages/TourDetailPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const TravelGuidePage = lazy(() => import('./pages/TravelGuidePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Global loading state
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'var(--bg-primary, #0a1628)',
    color: 'var(--text-primary, #f0ece4)',
    fontSize: '1rem',
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tour/:tourId" element={<TourDetailPage />} />
          <Route path="/booking/:tourId" element={<BookingPage />} />
          <Route path="/travel-guide" element={<TravelGuidePage />} />

          {/* 404 Catch-all */}
          <Route path="*" element={
            <div className="error-page" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}>
              <h1 style={{ marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>404 — Page Not Found</h1>
              <Link to="/" className="btn btn--ghost">
                ← Return to Home
              </Link>
            </div>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;