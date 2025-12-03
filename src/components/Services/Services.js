import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const servicesData = [
  {
    title: 'Integrated Facility Management',
    description: 'Holistic solutions for seamless building operations.'
  },
  {
    title: 'Advanced Technical Services',
    description: 'Predictive maintenance and expert system care.'
  },
  {
    title: 'Strategic Security Solutions',
    description: 'Intelligent protection for your most valuable assets.'
  }
];

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`service-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="service-card-inner">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a href="#!" className="service-learn-more">Learn More &rarr;</a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="section-title">Our Expertise</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
