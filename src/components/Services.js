import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Service 1</h3>
          <p>Description of the first service.</p>
        </div>
        <div className="service-card">
          <h3>Service 2</h3>
          <p>Description of the second service.</p>
        </div>
        <div className="service-card">
          <h3>Service 3</h3>
          <p>Description of the third service.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
