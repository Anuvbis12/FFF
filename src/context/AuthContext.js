import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    // In a real app, you'd perform authentication here
    setIsAuthenticated(true);
    navigate('/'); // Redirect to home page
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/auth'); // Redirect to auth page
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
