import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Lazy-loaded routes
const HomePage = lazy(() => import('./pages/HomePage'));
const TourDetailPage = lazy(() => import('./pages/TourDetailPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const TravelGuidePage = lazy(() => import('./pages/TravelGuidePage'));

// Global loading state
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #1a425a 0%, #0d2838 100%)',
    color: '#ffffff',
    fontSize: '1.5rem',
    fontFamily: "'Montserrat', sans-serif"
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
          <Route path="/tour/:tourId" element={<TourDetailPage />} />
          <Route path="/booking/:tourId" element={<BookingPage />} />
          <Route path="/travel-guide" element={<TravelGuidePage />} />
          
          {/* 404 Catch-all Route */}
          <Route path="*" element={
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '100vh', 
              color: '#ffffff' 
            }}>
              <h1 style={{ marginBottom: '10px' }}>404 - Page Not Found</h1>
              <Link to="/" style={{ color: '#a3e635', textDecoration: 'none', fontWeight: 600 }}>
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