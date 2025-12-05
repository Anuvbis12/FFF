import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const sunPath = "M12 6V2M12 22V18M6 12H2M22 12H18M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93";
  const moonPath = "M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 10.24 20.55 8.58 19.79 7.11C19.44 6.45 18.78 6 18 6H12C7.03 6 3 10.03 3 15";

  return (
    <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d={theme === 'dark' ? sunPath : moonPath}
          initial={false}
          animate={{ d: theme === 'dark' ? sunPath : moonPath }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </svg>
    </button>
  );
};

export default ThemeToggleButton;
