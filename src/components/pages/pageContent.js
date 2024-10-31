// App.js
import React, { useEffect, useRef } from "react";
import Home from './home/home';
import Lenis from '@studio-freight/lenis';

function PageContent() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for smoother scroll
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // RAF for smooth scroll handling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy(); // Ensure to clean up Lenis instance on unmount
    };
  }, []);

  return (
    <div className="page-content">
      <Home/>
    </div>);
}

export default PageContent;
