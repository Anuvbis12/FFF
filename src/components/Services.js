import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';

// Data for services - this makes it easier to manage
const servicesData = [
  {
    title: 'Facility Management',
    description: 'Comprehensive management of your buildings and facilities.'
  },
  {
    title: 'Technical Services',
    description: 'Expert maintenance for all technical systems.'
  },
  {
    title: 'Security Solutions',
    description: 'Advanced security to protect your assets.'
  }
];

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1,    // Trigger when 10% of the card is visible
  });

  return (
    <div
      ref={ref}
      // Add a 'visible' class when inView is true
      className={`service-card ${inView ? 'visible' : ''}`}
      // Add a staggered delay for each card
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
