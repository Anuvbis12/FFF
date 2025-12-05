import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About/About';

const AboutPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <section id="about">
        <About />
      </section>
    </motion.div>
  );
};

export default AboutPage;
