import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('Sending...');

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          setStatusMessage('Message sent successfully!');
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setStatusMessage(''), 5000);
      }, (error) => {
          setStatusMessage('Failed to send message. Please try again.');
          setIsSending(false);
          setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  return (
    <div ref={ref} className={`contact-section ${inView ? 'visible' : ''}`}>
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-subtitle">Have a project in mind? We’d love to hear from you.</p>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" required />
          <label>Your Name</label>
        </div>
        <div className="form-group">
          <input type="email" name="email" required />
          <label>Your Email</label>
        </div>
        <div className="form-group">
          <textarea name="message" required></textarea>
          <label>Your Message</label>
        </div>
        <button type="submit" className="submit-button" disabled={isSending}>
          {isSending ? 'Sending...' : 'Submit'}
        </button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
