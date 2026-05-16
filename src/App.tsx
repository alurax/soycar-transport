import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

// Lazy load all pages
const HomePage = lazy(() => import('./pages/HomePage'));
const TourDetailPage = lazy(() => import('./pages/TourDetailPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const TravelGuidePage = lazy(() => import('./pages/TravelGuidePage'));

// Simple loading component (can be enhanced later)
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #1a425a 0%, #0d2838 100%)',
    color: '#fff',
    fontSize: '1.5rem'
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
          {/* 404 Fallback */}
          <Route path="*" element={
            <div style={{ padding: '50px', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
              <a href="/">Go Home</a>
            </div>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
