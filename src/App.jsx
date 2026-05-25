
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import NewsFeedPage from './pages/NewsFeedPage.jsx';
import ArchivesPage from './pages/ArchivesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsFeedPage />} />
        <Route path="/archives" element={<ArchivesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
