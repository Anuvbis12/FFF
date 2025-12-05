import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="about-section">
      <div className={`about-content ${inView ? 'visible' : ''}`}>
        <h2 className="section-title">The BETA Philosophy</h2> {/* Changed from Apollo to BETA */}
        <p>
          At BETA, we don't just manage facilities; we orchestrate experiences. Founded on the principles of precision, innovation, and unwavering excellence, we redefine what it means to operate a space.
        </p>
        <p>
          Our bespoke solutions are crafted by industry visionaries, ensuring every detail is not just met, but anticipated. We are the silent force behind your success.
        </p>
      </div>
      <div className={`about-image ${inView ? 'visible' : ''}`}>
        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Our Team" />
      </div>
    </div>
  );
};

export default About;
