import React from 'react';
import { motion } from 'framer-motion'; // AnimatePresence is removed
import './LoadingScreen.css';

const svgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each letter drawing
      delay: 0.5, // Start drawing after the scanner has passed
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      pathLength: { duration: 1, ease: "easeInOut" },
      fill: { duration: 0.5, delay: 1.5 } // Fill after drawing is complete
    }
  }
};

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.5 } }}
    >
      <motion.div
        className="scanner-line"
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 1, ease: "linear" }}
      />
      <motion.svg
        className="loading-logo-svg"
        viewBox="0 0 400 100"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Path data for "BETA" */}
        <motion.path d="M 20 90 L 20 10 L 60 10 L 80 30 L 80 70 L 60 90 L 20 90 M 20 50 L 70 50" variants={pathVariants} />
        <motion.path d="M 110 90 L 110 10 L 150 10 L 170 30 L 150 50 L 110 50" variants={pathVariants} />
        <motion.path d="M 200 90 L 180 10 L 220 10 L 240 90 M 190 50 L 230 50" variants={pathVariants} />
        <motion.path d="M 270 90 L 250 10 L 290 10 L 310 90 M 260 50 L 300 50" variants={pathVariants} />
      </motion.svg>
    </motion.div>
  );
};

export default LoadingScreen;
