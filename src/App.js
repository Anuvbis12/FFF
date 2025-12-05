import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimationProvider } from './context/AnimationContext';
import { AnimatePresence } from 'framer-motion'; // 'motion' is removed as it's not used here
import './App.css';

// Components
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import CustomCursor from './components/CustomCursor/CustomCursor';

// Pages
import HomePage from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ShowcasePage = lazy(() => import('./pages/ShowcasePage'));

// The unused variables 'pageVariants' and 'pageTransition' are removed.

// A new component to handle the animated routes
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="explore" element={<ShowcasePage />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AnimationProvider>
      <ParallaxProvider>
        <CustomCursor />
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedRoutes />
          </Suspense>
        </Router>
      </ParallaxProvider>
    </AnimationProvider>
  );
}

export default App;
