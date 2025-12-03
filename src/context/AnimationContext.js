import React, { createContext, useState, useMemo } from 'react';

// Create the context
export const AnimationContext = createContext();

// Create a provider component
export const AnimationProvider = ({ children }) => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // useMemo prevents the value object from being recreated on every render
  const value = useMemo(() => ({
    isInitialLoad,
    setIsInitialLoad,
  }), [isInitialLoad]);

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
