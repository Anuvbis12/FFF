import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimationProvider } from './context/AnimationContext';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import CustomCursor from './components/CustomCursor/CustomCursor';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

// Pages
import HomePage from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ShowcasePage = lazy(() => import('./pages/ShowcasePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="explore" element={<ShowcasePage />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider> {/* Wrap everything with ThemeProvider */}
      <AnimationProvider>
        <ParallaxProvider>
          <CustomCursor />
          <AnimatePresence>
            {isLoading && <LoadingScreen />}
          </AnimatePresence>
          
          {!isLoading && (
            <Router>
              <Suspense fallback={<LoadingSpinner />}>
                <AnimatedRoutes />
              </Suspense>
            </Router>
          )}
        </ParallaxProvider>
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;
