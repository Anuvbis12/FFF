import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div
      className="auth-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="auth-container">
        {/* --- Back Button --- */}
        <Link to="/" className="back-button" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        {/* --- End of Back Button --- */}

        <div className="cyber-background-effect"></div>
        <div className="auth-toggle">
          <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''} aria-label="Login">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="user-icon">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''} aria-label="Register">
            Register
          </button>
          <motion.div className="glider" animate={{ x: isLogin ? 0 : '100%' }} />
        </div>

        <form className="auth-form">
          <div className="form-group">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input type="password" id="password" required />
            <label htmlFor="password">Password</label>
          </div>

          <AnimatePresence>
            {!isLogin && (
              <motion.div
                className="form-group"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <input type="password" id="confirmPassword" required />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </motion.div>
            )}
          </AnimatePresence>

          <button type="submit" className="auth-submit-button">
            {isLogin ? 'Authenticate' : 'Create Account'}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AuthPage;
