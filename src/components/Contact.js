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

    // !!! IMPORTANT !!!
    // Replace these placeholders with your actual EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatusMessage('Message sent successfully!');
          setIsSending(false);
          // Clear the form
          form.current.reset();
          setTimeout(() => setStatusMessage(''), 5000); // Clear message after 5 seconds
      }, (error) => {
          console.log(error.text);
          setStatusMessage('Failed to send message. Please try again.');
          setIsSending(false);
          setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  return (
    <div ref={ref} className={`contact ${inView ? 'visible' : ''}`}>
      <h2>Contact Us</h2>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
