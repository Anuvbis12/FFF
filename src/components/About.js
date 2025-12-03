import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={`about ${inView ? 'visible' : ''}`}>
      <div className="about-content">
        <h2>About Apollo</h2>
        <p>
          Founded in 2024, Apollo has been a pioneer in innovative facility management. Our mission is to provide seamless, efficient, and sustainable solutions for businesses of all sizes. We believe in building strong partnerships with our clients, founded on trust and a commitment to excellence.
        </p>
        <p>
          Our team of experts is dedicated to ensuring your facilities run smoothly, so you can focus on what matters most: your business.
        </p>
      </div>
      <div className="about-image">
        {/* Placeholder for an image */}
        <img src="https://via.placeholder.com/500x350" alt="About Us" />
      </div>
    </div>
  );
};

export default About;
