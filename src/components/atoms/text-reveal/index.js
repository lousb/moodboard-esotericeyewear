import React, { useState, useEffect, useRef } from "react";
import './style.css';
import { motion } from "framer-motion";
import { reveal } from "./anim";

function Reveal({ textContent, element = "div", elementClass = "" }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;

                // Set isVisible to true only when the element is intersecting
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Adjust threshold as per your needs
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    // Determine the motion component based on the "element" prop
    const MotionComponent = motion[element] || motion.div; // Use motion.div as a fallback

    return (
        <MotionComponent
            ref={ref}
            className={'text-reveal-element ' + elementClass}
        >
            {textContent.split("").map((letter, index) => (
                <motion.span 
                    key={index} 
                    custom={index} 
                    className="reveal-motion-span" 
                    variants={reveal}
                    initial="initial"
                    animate={isVisible ? "open" : "initial"} // Keep it in "initial" when not visible
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </MotionComponent>
    );
}

export default Reveal;
