import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import { AnimationContext } from '../../context/AnimationContext';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const { isInitialLoad, setIsInitialLoad } = useContext(AnimationContext);
  const wrapperRef = useRef(null); // Ref for the main wrapper

  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => setIsInitialLoad(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, setIsInitialLoad]);

  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return; // Safety check

    const blobs = gsap.utils.toArray('.liquid-aurora-background div');
    if (blobs.length === 0) return; // Safety check

    // Set initial random movement for each blob
    blobs.forEach(blob => {
      gsap.to(blob, {
        x: 'random(-200, 200)',
        y: 'random(-200, 200)',
        scale: 'random(0.8, 1.2)',
        duration: 'random(15, 25)',
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      blobs.forEach(blob => {
        const blobRect = blob.getBoundingClientRect();
        const blobX = blobRect.left - rect.left + blobRect.width / 2;
        const blobY = blobRect.top - rect.top + blobRect.height / 2;

        const dx = blobX - mouseX;
        const dy = blobY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repelStrength = 1 - Math.min(distance / 300, 1);

        if (repelStrength > 0) {
          gsap.to(blob, {
            x: `+=${(dx / distance) * repelStrength * 50}`,
            y: `+=${(dy / distance) * repelStrength * 50}`,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      gsap.killTweensOf(blobs);
    };
  }, []);

  return (
    // The ref is now attached to this top-level div
    <div ref={wrapperRef} className="hero-wrapper-for-animation">
      <ParallaxBanner
        className="hero-container"
        layers={[
          { image: 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?q=80&w=2070&auto=format&fit=crop', speed: -20 },
          {
            speed: -10,
            children: (
              <div className="liquid-aurora-background">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ),
          },
          {
            speed: 0,
            children: (
              <div className={`hero-content ${isInitialLoad ? 'initial-fade-in' : ''}`}>
                <h1 className="hero-title">Engineering Emotion</h1>
                <p className="hero-subtitle">Discover the Future of Facility Management</p>
                <Link to="/explore" className="hero-cta-button">Explore Apollo</Link>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Hero;
