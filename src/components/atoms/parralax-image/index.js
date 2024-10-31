import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.css';
import Reveal from '../text-reveal';

gsap.registerPlugin(ScrollTrigger);

const ParallaxImage = ({ url, className, index }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    const updateParallax = () => {
      if (!container || !image) return;

      // Get the image height and calculate 10% of its height for parallax movement
      const imageHeight = image.offsetHeight;
      const viewportHeight = window.innerHeight;
      const parallaxDistance = imageHeight * 0.1; // 10% of the image's height

      // Apply GSAP parallax animation
      gsap.to(image, {
        y: parallaxDistance, // Move the image by 10% of its height
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: `top+=${(viewportHeight - imageHeight) / 2} bottom`, // Start when the container is in the middle of the viewport
          end: `bottom-=${(viewportHeight - imageHeight) / 2} top`,  // End when the bottom of the container is in the middle of the viewport
          scrub: 1,
          pin: false,
          invalidateOnRefresh: true,
        },
      });
    };

    updateParallax();
    window.addEventListener('resize', updateParallax);

    return () => {
      window.removeEventListener('resize', updateParallax);

      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='parallax-wrap'>
      <div
        className={`parallax-image-container ${className}-wrap ${className}-wrap-parallax-div-index-on-page`}
        ref={containerRef}
      >
        <img src={url} className={`${className} image-container`} ref={imageRef} />
      </div>
    </div>
  );
};

export default ParallaxImage;
