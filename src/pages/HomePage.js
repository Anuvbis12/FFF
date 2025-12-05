import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Hero from '../components/Hero/Hero';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import './HomePage.css';

const servicesWithImages = [
  {
    title: 'Integrated Facility Management',
    description: 'Holistic solutions for seamless building operations, where every component works in perfect harmony.',
    imageUrl: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1935&auto=format&fit=crop',
  },
  {
    title: 'Advanced Technical Services',
    description: 'Predictive maintenance and expert system care, powered by data and intelligent automation.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Strategic Security Solutions',
    description: 'Intelligent protection for your most valuable assets, monitored 24/7 by our elite team.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop',
  },
];

const ServiceSection = ({ title, description, imageUrl, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const isReversed = index % 2 !== 0;

  return (
    <div ref={ref} className={`service-section ${isReversed ? 'reversed' : ''}`}>
      <div className={`service-text-content ${inView ? 'visible' : ''}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="service-image-container">
        <Parallax speed={10}>
          <img src={imageUrl} alt={title} className={inView ? 'visible' : ''} />
        </Parallax>
      </div>
    </div>
  );
};

const HomePage = () => {
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
      <Hero />
      <div className="home-content-wrapper">
        {servicesWithImages.map((service, index) => (
          <ServiceSection
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HomePage;
