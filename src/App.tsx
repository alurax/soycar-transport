import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TourDetailPage from './pages/TourDetailPage';
import BookingPage from './pages/BookingPage';
import TravelGuidePage from './pages/TravelGuidePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour/:tourId" element={<TourDetailPage />} />
        <Route path="/booking/:tourId" element={<BookingPage />} />
        <Route path="/travel-guide" element={<TravelGuidePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
