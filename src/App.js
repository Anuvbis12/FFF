import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimationProvider } from './context/AnimationContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
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
const AuthPage = lazy(() => import('./pages/AuthPage'));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Full-screen routes without Layout */}
        <Route path="explore" element={<ShowcasePage />} />
        <Route path="auth" element={<AuthPage />} />
        
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </AnimatePresence>
  );
};

// --- THIS IS THE FIX ---
// The unnecessary useEffect and useNavigate have been removed.
const AppWrapper = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedRoutes />
      </Suspense>
    </AuthProvider>
  );
};
// --- END OF FIX ---

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimationProvider>
        <ParallaxProvider>
          <CustomCursor />
          <AnimatePresence>
            {isLoading && <LoadingScreen />}
          </AnimatePresence>
          
          {!isLoading && (
            <Router>
              <AppWrapper />
            </Router>
          )}
        </ParallaxProvider>
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;
