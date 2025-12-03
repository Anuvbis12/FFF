import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimationProvider } from './context/AnimationContext';
// ReactLenis is removed
import './App.css';

// Layout and Pages
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Lazy load page components
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ShowcasePage = lazy(() => import('./pages/ShowcasePage'));

function App() {
  return (
    // The ReactLenis wrapper is removed
    <AnimationProvider>
      <ParallaxProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="explore" element={<ShowcasePage />} />
                <Route path="*" element={<div>Page Not Found</div>} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </ParallaxProvider>
    </AnimationProvider>
  );
}

export default App;
