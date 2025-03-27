import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../pages/App';
import Services from '../pages/Services';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

/**
 * Main router configuration
 *
 * @returns {JSX.Element} Main router configuration.
 */
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
