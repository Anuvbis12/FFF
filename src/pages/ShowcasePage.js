import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import './ShowcasePage.css';

// Data for the pillars
const pillars = [
  {
    title: 'Innovation',
    description: 'We harness cutting-edge technology to create intelligent, self-sustaining environments that anticipate future needs.',
  },
  {
    title: 'Precision',
    description: 'From macro-strategy to micro-details, every action is executed with flawless accuracy and purpose.',
  },
  {
    title: 'Sustainability',
    description: 'Our solutions are designed to be ecologically responsible, ensuring a better future for our planet and your business.',
  },
];

const PillarCard = ({ title, description }) => {
  const { ref, inView } = useInView({ threshold: 0.8, triggerOnce: false });
  return (
    <div ref={ref} className={`pillar-card ${inView ? 'active' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ShowcasePage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="showcase-wrapper">
      {/* Chapter 1: The Cinematic Intro */}
      <div className="sticky-banner-container">
        <ParallaxBanner
          layers={[{
            image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop',
            speed: -20,
            scale: [1.2, 1],
            opacity: [0.5, 1],
          }]}
          className="showcase-banner"
        />
        <div ref={heroRef} className="showcase-content">
          <h1 className={heroInView ? 'visible' : ''}>Beyond Management</h1>
          <h2 className={heroInView ? 'visible' : ''}>We Architect the Future</h2>
          <p className={heroInView ? 'visible' : ''}>
            This is not just about buildings. It's about creating ecosystems where potential thrives.
          </p>
        </div>
      </div>

      {/* Chapter 2: The Pillars */}
      <div className="pillars-section">
        <h2>Our Three Pillars</h2>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} title={pillar.title} description={pillar.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcasePage;
